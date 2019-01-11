import React, { Component } from "react";
import { Router } from "@reach/router";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/404";

import "./styles/main.scss";

import { siteMetadata } from "./app-config";

class App extends Component {
  render() {
    return (
      <div>
        <Header title={siteMetadata.title} />
        <Router>
          <Home path="/" />
          <Login path="login" />
          <NotFound default />
        </Router>
      </div>
    );
  }
}

export default App;
