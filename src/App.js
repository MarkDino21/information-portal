import React, { Component } from "react";
import Header from "./components/Header";
import Feed from "./components/Feed";

import "./styles/main.scss";

import { siteMetadata } from "./app-config";

class App extends Component {
  render() {
    return (
      <div>
        <Header title={siteMetadata.title} />
        <Feed />
      </div>
    );
  }
}

export default App;
