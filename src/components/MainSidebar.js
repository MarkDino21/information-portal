import React from "react";
import { ReactComponent as HomeSVG } from "../assets/home.svg";
import { ReactComponent as FileTextSVG } from "../assets/file-text.svg";

import "../styles/components/_main-sidebar.scss";

class MainSidebar extends React.Component {
  render() {
    return (
      <div>
        <section className="sidebar">
          <main className="sidebar-body">
            <ul>
              <li>
                <a href="#" className="active">
                  <HomeSVG />
                  <span>Home</span>
                </a>
              </li>
            </ul>

            <ul>
              <header className="sidebar-title">Forms</header>
              <li>
                <a href="#">
                  <FileTextSVG />
                  <span>Grades</span>
                </a>
              </li>
            </ul>
          </main>
        </section>
      </div>
    );
  }
}
export default MainSidebar;
