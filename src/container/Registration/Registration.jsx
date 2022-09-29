import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import styles from "./Registration.module.css";
import { signUpSchema } from "./validation";

const Registration = () => {
  // Take initial values of form
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    city: "",
  };

  // To use all formik function we can extract from useFormik and also we can do it validation in that
  const { values, handleBlur, handleChange, handleSubmit, touched, errors } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      validateOnChange: true,
      // validateOnBlur: false,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  // console.log(errors);
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <h2>Sign Up</h2>

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
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <span>Email</span>
            <i></i>
          </div>
          {errors.email && touched.email ? (
            <p className={styles.form_error}>{errors.email}</p>
          ) : null}

          <div className={styles.inputBox}>
            <input
              type="text"
              name="city"
              id="city"
              autoComplete="off"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <span>City</span>
            <i></i>
          </div>
          {errors.city && touched.city ? (
            <p className={styles.form_error}>{errors.city}</p>
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

          <div className={styles.inputBox}>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              autoComplete="off"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <span>Confirm Password</span>
            <i></i>
          </div>
          {errors.confirmPassword && touched.confirmPassword ? (
            <p className={styles.form_error}>{errors.confirmPassword}</p>
          ) : null}

          <div className={styles.link}>
            <Link to="/login"> Login</Link>
          </div>
          <input type="submit" value="Register" className={styles.submit2} />
        </form>
      </div>
    </div>
  );
};

export default Registration;
