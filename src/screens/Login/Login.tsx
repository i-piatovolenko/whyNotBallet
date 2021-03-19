import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
  return (
    <form className={styles.form}>
      <h1 className={styles.header}>Login</h1>
      <div className={styles.inputs}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email"/>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"/>
      </div>
      <div className={styles.options}>
        <label htmlFor="remember"><input type="checkbox"/>Remember Me</label>
        <NavLink to="/forgotPassword">Forgot Password?</NavLink>
      </div>
      <div className={styles.buttons}>
        <button onClick={(e) => e.preventDefault()}><NavLink to="/signup">Sign Up</NavLink></button>
        <button onClick={(e) => e.preventDefault()} type="submit">Login</button>
      </div>
    </form>
  );
};

export default Login;