import React, { Component } from "react";
import Header from "./components/Header";
import MainSidebar from "./components/MainSidebar";
import Feed from "./components/Feed";

import "./styles/main.scss";

import { siteMetadata } from "./app-config";

class App extends Component {
  render() {
    return (
      <div>
        <Header title={siteMetadata.title} />
        <section className="o-container o-flex main">
          <div className="o-flex--basis-30">
            <MainSidebar />
          </div>
          <div className="feed">
            <Feed />
          </div>
        </section>
      </div>
    );
  }
}

export default App;
