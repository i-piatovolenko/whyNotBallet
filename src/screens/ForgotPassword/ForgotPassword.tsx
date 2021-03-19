import React from 'react';
import styles from './forgotPassword.module.css';
import {NavLink} from "react-router-dom";

const ForgotPassword = () => {
  return (
    <form className={styles.form}>
      <h1 className={styles.header}>Forgot Password</h1>
      <p>Enter your e-mail and we'll send you a link to reset your password.</p>
      <div className={styles.inputs}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email"/>
      </div>

      <div className={styles.buttons}>
        <button onClick={(e) => e.preventDefault()}><NavLink to="/">Back</NavLink></button>
        <button onClick={(e) => e.preventDefault()} type="submit">Send</button>
      </div>
    </form>
  );
}

export default ForgotPassword;