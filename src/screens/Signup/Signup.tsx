import React from 'react';
import styles from './signup.module.css';
import {NavLink} from "react-router-dom";

const Signup = () => {
  return (
    <form className={styles.form}>
        <h1 className={styles.header}>Signup</h1>
      <div className={styles.inputs}>
        <div className={styles.group}>
          <div>
            <label htmlFor="firstName">First Name: </label>
            <input type="text" id="firstName" name="firstName"/>
          </div>
          <div>
            <label htmlFor="lastName">Last Name: </label>
            <input type="text" id="lastName" name="lastName"/>
          </div>
        </div>
        <label htmlFor="email">Email: </label>
        <input type="text" id="email" name="email"/>
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password"/>
        <label htmlFor="confirm">Confirm Password: </label>
        <input type="password" id="confirm" name="confirm"/>
      </div>
      <div className={styles.options}>
        <label htmlFor="remember"><input type="checkbox"/>Remember Me</label>
        <a href="#">Forgot Password?</a>
      </div>
      <div className={styles.buttons}>
        <button onClick={(e) => e.preventDefault()}><NavLink to="/">Back</NavLink></button>
        <button onClick={(e) => e.preventDefault()}>Sign Up</button>
      </div>
    </form>
  );
};

export default Signup;