import React from 'react';
import Login from "./screens/Login/Login";
import styles from "./app.module.css";
import ballerina from "./img/ballerina.png";
import Signup from "./screens/Signup/Signup";
import { Route } from 'react-router-dom';
import ForgotPassword from "./screens/ForgotPassword/ForgotPassword";

function App() {
  return (
    <div className={styles.wrapper}>
      <img src={ballerina} alt="ballerina" className={[styles.ballerina, styles.swing].join(" ")}/>
      <Route exact path="/" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/forgotPassword" component={ForgotPassword}/>
    </div>
  );
}

export default App;
