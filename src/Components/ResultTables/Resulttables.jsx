import React, { useEffect, useRef } from "react";
import "./Resulttables.css";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Resulttables = () => {
  const [DataName0, setDataName0] = useState("No Data For View");
  const [Data0, setData0] = useState("");
  const [DataName1, setDataName1] = useState("No Data For View");
  const [Data1, setData1] = useState("");
  const [DataName2, setDataName2] = useState("No Data For View");
  const [Data2, setData2] = useState("");
  const [DataName3, setDataName3] = useState("No Data For View");
  const [Data3, setData3] = useState("");
  const [DataName4, setDataName4] = useState("No Data For View");
  const [DataName5, setDataName5] = useState("No Data For View");
  const [DataName6, setDataName6] = useState("No Data For View");
  const [DataName7, setDataName7] = useState("No Data For View");
  const [DataName8, setDataName8] = useState("No Data For View");

  const db = firebase.firestore();

  db.collection("Measurement").onSnapshot(function (snapshot) {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const dataresult = String(data[0].id);
    console.log(data);
    console.log(dataresult);
    setDataName0(data[0].id);
    setDataName1(data[1].id);
  });
  const exportDataName0 = () => {
    console.log(DataName0 + " data downloading...");
    const doc_ref = db.collection("Measurement");
    const doc_ref2 = doc_ref.doc(DataName0);
    doc_ref2
      .collection("data")
      .orderBy("Time", "asc")
      .onSnapshot(function (snapshot) {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData0(data);
        console.log(data);
      });

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(Data0)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };
  const exportDataName1 = () => {
    console.log(DataName1 + " data downloading...");
    const doc_ref = db.collection("Measurement");
    const doc_ref2 = doc_ref.doc(DataName1);
    doc_ref2
      .collection("data")
      .orderBy("Time", "asc")
      .onSnapshot(function (snapshot) {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData1(data);
        console.log(data);
      });

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(Data1)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };
  const exportDataName2 = () => {
    console.log(DataName2 + " data downloading...");
    const doc_ref = db.collection("Measurement");
    const doc_ref2 = doc_ref.doc(DataName2);
    doc_ref2
      .collection("data")
      .orderBy("Time", "asc")
      .onSnapshot(function (snapshot) {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData2(data);
        console.log(data);
      });

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(Data2)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };const exportDataName3 = () => {
    console.log(DataName3 + " data downloading...");
    const doc_ref = db.collection("Measurement");
    const doc_ref2 = doc_ref.doc(DataName3);
    doc_ref2
      .collection("data")
      .orderBy("Time", "asc")
      .onSnapshot(function (snapshot) {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData3(data);
        console.log(data);
      });

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(Data3)
    )}`;
    const link = document.createElement("a");
    link.href = jsonString;
    link.download = "data.json";

    link.click();
  };
  return (
    <div className="bg-Resulttables">
      <div className="Table-titles-area">
        <ul className="Table-titles">
          <li>Date & Time</li>

          <li>Download</li>
        </ul>
        <hr className="Table-line"></hr>
      </div>
      <div className="Table-data-area">
        <ul className="Table-datas">
          <li>{DataName0}</li>

          <button className="downloadButton" onClick={exportDataName0}>
            <li className="download-image"> </li>
          </button>
        </ul>
        <ul className="Table-datas">
          <li>{DataName1}</li>
          <button className="downloadButton" onClick={exportDataName1}>
            <li className="download-image"> </li>{" "}
          </button>
        </ul>
        
        <ul className="Table-datas">
           <li>{DataName2}</li>
           <button className="downloadButton" onClick={exportDataName2}>
             <li className="download-image"> </li>{" "}
           </button>
         </ul>
         <ul className="Table-datas">
           <li>{DataName3}</li>
            <button className="downloadButton" onClick={exportDataName3}>
             <li className="download-image"> </li>{" "}
           </button>
         </ul>
        {/*
        // <ul className="Table-datas">
        //   <li>{DataName4}</li>
        //    <button className="downloadButton" onClick={exportData4}>
        //     <li className="download-image"> </li>{" "}
        //   </button>
        // </ul>
        // <ul className="Table-datas">
        //   <li>{DataName5}</li>
        //    <button className="downloadButton" onClick={exportData5}>
        //     <li className="download-image"> </li>{" "}
        //   </button>
        // </ul>
        // <ul className="Table-datas">
        //   <li>{DataName6}</li>
        //   <button className="downloadButton" onClick={exportData6}>
        //     <li className="download-image"> </li>{" "}
        //   </button>
        // </ul>
        // <ul className="Table-datas">
        //   <li>{DataName7}</li>
        //    <button className="downloadButton" onClick={exportData7}>
        //     <li className="download-image"> </li>{" "}
        //   </button>
        // </ul>
        // <ul className="Table-datas">
        //   <li>{DataName8}</li>
        //    <button className="downloadButton" onClick={exportData8}>
        //     <li className="download-image"> </li>{" "}
        //   </button>
        // </ul> */}
      </div>
    </div>
  );
};

export default Resulttables;
