const fs = require("fs");
const bodyParser = require("body-parser");
const jsonServer = require("json-server");
const jwt = require("jsonwebtoken");

//   Initialize our json server
const server = jsonServer.create();

//we use our database
const userDb = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

//use parser here
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
//setup server
server.use(jsonServer.defaults());

// To generate access token just take any random number
const SECRET_KEY = "3547589447";

// Define the expiration time for our token
const expiresIn = "1h";

// helper function to create a token
const createToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, { expiresIn });
};

// create a function whether user is authenticated or not
const isAuthenticated = ({ email, password }) => {
  return (
    //It will check email &pass if correct it will return true otherwise false
    userDb.users.findIndex(
      (user) => user.email === email && user.password === password
    ) !== -1
  );
};

//Creating Register Api
server.post("/api/auth/register", (req, res) => {
  // Destructure the data coming from frontend react email and password
  const { email, password } = req.body;

  if (isAuthenticated({ email, password })) {
    const status = 401;
    const message = "Email & Password already exist";
    res.status(status).json({ status, message });
    return;
  }

  //   First read the file
  fs.readFile("./users.json", (err, data) => {
    if (err) {
      const status = 401;
      const message = err;
      res.status(status).json({ status, message });
      return;
    }

    // To insert a new data
    data = JSON.parse(data.toString());

    // We need to generate id .it will update the id.from this we get last item id
    let last_item_id = data.users[data.users.length - 1].id;

    data.users.push({ id: last_item_id + 1, email: email, password: password });
    let writeData = fs.writeFile(
      "./users.json",
      JSON.stringify(data),
      (err, result) => {
        if (err) {
          const status = 401;
          const message = err;
          res.status(status).json({ status, message });
          return;
        }
      }
    );
  });

  //   create a token for new user
  const access_token = createToken({ email, password });
  res.status(200).json({ access_token });
});

//Create Login Api
server.post("/api/auth/login", (req, res) => {
  const { email, password } = req.body;
  if (!isAuthenticated({ email, password })) {
    const status = 401;
    const message = "Incorrect Email Or Password";
    res.status(status).json({ status, message });
  }
  const access_token = createToken({ email, password });
  res.status(200).json({ access_token });
});

// listen this our backend server on any port
server.listen(5000, () => {
  console.log(`Running fake api json server`);
});
