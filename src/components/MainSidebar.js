import React from "react";
import { ReactComponent as HomeSVG } from "../assets/home.svg";
import { ReactComponent as FileTextSVG } from "../assets/file-text.svg";

class MainSidebar extends React.Component {
  render() {
    return (
      <section className="sidebar">
        <ul className="o-list-bare">
          <li className="sidebar-item sidebar-item-active">
            <HomeSVG />
            <span className="sidebar-item-title">Home</span>
          </li>
        </ul>

        <ul className="o-list-bare">
          <div className="sidebar-title">Forms</div>
          <li className="sidebar-item">
            <FileTextSVG />
            <span className="sidebar-item-title">Request Grades</span>
          </li>
        </ul>
      </section>
    );
  }
}
export default MainSidebar;
