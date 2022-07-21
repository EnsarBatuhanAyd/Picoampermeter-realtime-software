import React from "react";
import "./Sidebar.css";
import sync from "./../../Images/sync.png";

const Sidebar = () => {
  return (
    <div className="bg-sidebar">
      <div className="sync-sidebar">
        <img className="sync-image" href={sync}></img>
        Auto Sync
      </div>
      <div>
        <ul className="navigate-sidebar">
          <a href="/">
            <button type="button" className="sidebar-button">
              <li>Realtime</li>
            </button>
          </a>
          <a href="/results">
            <button className="sidebar-button">
              <li>Results</li>
            </button>
          </a>
          <a href="/">
            <button className="sidebar-button">
              <li>Settings</li>
            </button>
          </a>
          <a href="/">
            <button className="sidebar-button">
              <li>Credit</li>
            </button>
          </a>
        </ul>
      </div>
      <div className="year-sidebar">2022</div>
    </div>
  );
};

export default Sidebar;
