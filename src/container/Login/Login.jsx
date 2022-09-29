import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useFormik } from "formik";
import { loginSchema } from "./validation.js";

const Login = () => {
  const initialValues = {
    name: "",
    password: "",
  };

  // To use all formik function we can extract from useFormik and also we can do it validation in that
  const { values, handleBlur, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues,
      validationSchema: loginSchema,
      validateOnChange: true,
      // validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <div className={styles.inputBox}>
            <input
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <span>Username</span>
            <i></i>
          </div>
          {touched.name && errors.name ? (
            <p className={styles.form_error}>{errors.name}</p>
          ) : null}

          <div className={styles.inputBox}>
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <span>Password</span>
            <i></i>
          </div>
          {errors.password && touched.password ? (
            <p className={styles.form_error}>{errors.password}</p>
          ) : null}

          <div className={styles.links}>
            <Link to="#">Forgot Password</Link>
            <Link to="/registration"> Signup</Link>
          </div>
          <input type="submit" value="Login" className={styles.submit1} />
        </form>
      </div>
    </div>
  );
};

export default Login;
