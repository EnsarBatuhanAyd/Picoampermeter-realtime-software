import React from "react";
import "./Credits.css";

const Credits = () => {
  return (
    <div className="bg-Credits">
      <h3 className="Credit-title">Picoammeter Data Visualizer V0.1</h3>
      <p className="Credit-text">
        This Software developing for measure current coming from Keithley 6485
        and data with graphs visualize now it's more meaningful!
      </p>
     
      <p className="Credit-text">Developer: Ensar Batuhan Aydın</p>
      <p className="Credit-text">
        Infrastructure center : Selcuk University - Laser Spectroscopy
        Labratoary - Konya, Türkiye
      </p>
    </div>
  );
};

export default Credits;
