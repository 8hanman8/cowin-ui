import React, { Component } from "react";
import Posts from '../posts'

export class Login extends Component {
  render() {
    return (
      <div>
        <h1>This is Login Page</h1>
        <Posts/>
      </div>
    );
  }
}

export default Login;
