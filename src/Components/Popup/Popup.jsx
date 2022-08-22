import React from "react";
import ChartsPopup from "../Charts/ChartsPopup";
import "./Popup.css";
const Popup = (props) => {
  return (
    <div className="popup-box">
      <div className="popup-bg">
        {" "}
        <div>
          <ChartsPopup></ChartsPopup>
        </div>
        <span className="close-icon" onClick={props.handleClose}>
          Exit
        </span>
        {props.content}
      </div>
    </div>
  );
};

export default Popup;
