import React from "react";
import { ReactComponent as HomeSVG } from "../assets/home.svg";
import { ReactComponent as FileTextSVG } from "../assets/file-text.svg";

class MainSidebar extends React.Component {
  render() {
    return (
      <section className="sidebar">
        <main className="sidebar-body">
          <ul className="o-list-bare">
            <li>
              <a href="" className="active">
                <HomeSVG />
                <span>Home</span>
              </a>
            </li>
          </ul>

          <ul className="o-list-bare">
            <header className="sidebar-title">Forms</header>
            <li>
              <a href="">
                <FileTextSVG />
                <span>Request Grades</span>
              </a>
            </li>
          </ul>
        </main>
      </section>
    );
  }
}
export default MainSidebar;
