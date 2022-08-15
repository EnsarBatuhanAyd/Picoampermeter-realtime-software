import React from "react";
import "./Resulttables.css";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Resulttables = () => {
  const db = firebase.firestore();
  db.collection("Measurement")
  .onSnapshot(function (snapshot) {
    const data = snapshot.docs.map((doc) => ({
     
      ...doc.id,
    }));
      
     console.log(data);
    });

  return (
    <div className="bg-Resulttables">
      <div className="Table-titles-area">
        <ul className="Table-titles">
          <li>Date & Time</li>
          <li>Ampertange</li>
          <li>Download</li>
        </ul>
        <hr className="Table-line"></hr>
      </div>
      <div className="Table-data-area">
        <ul className="Table-datas">
          <li></li>
          <li className="download-image"></li>
        </ul>
      </div>
    </div>
  );
};

export default Resulttables;
