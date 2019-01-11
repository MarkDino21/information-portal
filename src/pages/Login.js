import React from "react";

const Login = () => (
  <section className="o-container">
    <div className="login-container">
      <h1>Welcome back!</h1>
      <div>
        <input type="text" className="text-input" />
        <input type="password" className="text-input" />
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  </section>
);

export default Login;
