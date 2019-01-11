import React from "react";
import MainSidebar from "../components/MainSidebar";
import Feed from "../components/Feed";

const Home = () => (
  <section className="o-container o-flex main">
    <div className="o-flex--basis-30">
      <MainSidebar />
    </div>
    <div className="feed">
      <Feed />
    </div>
  </section>
);

export default Home;
