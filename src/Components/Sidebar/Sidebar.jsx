import React from "react";
import "./Sidebar.css";


const Sidebar = () => {
  return (
    <div className="bg-sidebar">
      <div className="logo-sidebar">
        <div className="logo-image" ></div> 
        
      </div>
      <div>
        <ul className="navigate-sidebar">
          <a href="/realtime">
            <button type="button" className="sidebar-button">
              <li>Realtime</li>
            </button>
          </a>
          <a href="/results">
            <button className="sidebar-button">
              <li>Results</li>
            </button>
          </a>
         
          <a href="/credits">
            <button className="sidebar-button">
              <li>Credit</li>
            </button>
          </a>
          <a href="/">
            <button className="sidebar-button">
              <li>LogOut</li>
            </button>
          </a>
        </ul>
      </div>
      <div className="sync-sidebar">
        <div className="sync-image" ></div> 
        Auto Sync
      </div>
    </div>
  );
};

export default Sidebar;
