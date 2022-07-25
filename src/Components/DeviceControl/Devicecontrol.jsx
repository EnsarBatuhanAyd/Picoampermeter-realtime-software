import React from "react";
import "./Devicecontrol.css";

const Devicecontrol = () => {
  return (
    <div className="bg-Devicecontrol">
      <div className="Status">
        <div className="Status-title">Device Status</div>
        <div className="Status-area">
        <ul className="Status-content">
          <li><div className="point-status-green"></div>Data Flow</li>
          <li><div className="point-status-green"></div>Database Connection</li>
          <li><div className="point-status-yellow"></div>Software Health</li>
        </ul>
        </div>
      </div>
      <div className="Control">
        <div className="Control-title">Control</div>
        <div className="Control-buttons-area">
          <button className="Control-button-start">Start</button>
          <button className="Control-button-stop">Stop</button>
        </div>
        <div className="Control-status-area">Active</div>
      </div>
    </div>
  );
};

export default Devicecontrol;
