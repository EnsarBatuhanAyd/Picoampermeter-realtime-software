import React, { useEffect, useRef } from "react";
import "./Resulttables.css";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Popup from "./../Popup/Popup";
const Resulttables = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [DataName1, setDataName1] = useState("No Data For View");
  const [Data1, setData1] = useState("");
  const [DataName2, setDataName2] = useState("No Data For View");
  const [Data2, setData2] = useState("");
  const [DataName3, setDataName3] = useState("No Data For View");
  const [Data3, setData3] = useState("");
  const [DataName4, setDataName4] = useState("No Data For View");
  const [Data4, setData4] = useState("");
  const [DataName5, setDataName5] = useState("No Data For View");
  const [Data5, setData5] = useState("");

  const [DataName6, setDataName6] = useState("No Data For View");
  const [Data6, setData6] = useState("");
  const [DataName7, setDataName7] = useState("No Data For View");
  const [Data7, setData7] = useState("");
  const [DataName8, setDataName8] = useState("No Data For View");
  const [Data8, setData8] = useState("");

  const db = firebase.firestore();

  db.collection("Measurement").onSnapshot(function (snapshot) {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const dataresult = String(data[0].id);
    console.log(data);
    console.log(dataresult);

    setDataName1(data[1].id);
    setDataName2(data[2].id);
    setDataName3(data[3].id);
    setDataName4(data[4].id);
    setDataName5(data[5].id);
    setDataName6(data[6].id);
    setDataName7(data[7].id);
    setDataName8(data[8].id);
  });

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
    const link1 = document.createElement("a");
    link.href = jsonString;
    link1.href = jsonString;
    link.download = "data.json";
    link1.download = "data.txt";
    link.click();
    link1.click();
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
    const link1 = document.createElement("a");
    link.href = jsonString;
    link1.href = jsonString;
    link.download = "data.json";
    link1.download = "data.txt";
    link.click();
    link1.click();
  };
  const exportDataName3 = () => {
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
    const link1 = document.createElement("a");
    link.href = jsonString;
    link1.href = jsonString;
    link.download = "data.json";
    link1.download = "data.txt";
    link.click();
    link1.click();
  };
  const exportDataName4 = () => {
    console.log(DataName4 + " data downloading...");
    const doc_ref = db.collection("Measurement");
    const doc_ref2 = doc_ref.doc(DataName4);
    doc_ref2
      .collection("data")
      .orderBy("Time", "asc")
      .onSnapshot(function (snapshot) {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData4(data);
        console.log(data);
      });

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(Data4)
    )}`;
    const link = document.createElement("a");
    const link1 = document.createElement("a");
    link.href = jsonString;
    link1.href = jsonString;
    link.download = "data.json";
    link1.download = "data.txt";
    link.click();
    link1.click();
  };
  const exportDataName5 = () => {
    console.log(DataName5 + " data downloading...");
    const doc_ref = db.collection("Measurement");
    const doc_ref2 = doc_ref.doc(DataName5);
    doc_ref2
      .collection("data")
      .orderBy("Time", "asc")
      .onSnapshot(function (snapshot) {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData5(data);
        console.log(data);
      });

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(Data5)
    )}`;
    const link = document.createElement("a");
    const link1 = document.createElement("a");
    link.href = jsonString;
    link1.href = jsonString;
    link.download = "data.json";
    link1.download = "data.txt";
    link.click();
    link1.click();
  };
  const exportDataName6 = () => {
    console.log(DataName6 + " data downloading...");
    const doc_ref = db.collection("Measurement");
    const doc_ref2 = doc_ref.doc(DataName6);
    doc_ref2
      .collection("data")
      .orderBy("Time", "asc")
      .onSnapshot(function (snapshot) {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData6(data);
        console.log(data);
      });

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(Data6)
    )}`;
    const link = document.createElement("a");
    const link1 = document.createElement("a");
    link.href = jsonString;
    link1.href = jsonString;
    link.download = "data.json";
    link1.download = "data.txt";
    link.click();
    link1.click();
  };
  const exportDataName7 = () => {
    console.log(DataName7 + " data downloading...");
    const doc_ref = db.collection("Measurement");
    const doc_ref2 = doc_ref.doc(DataName7);
    doc_ref2
      .collection("data")
      .orderBy("Time", "asc")
      .onSnapshot(function (snapshot) {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData7(data);
        console.log(data);
      });

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(Data7)
    )}`;
    const link = document.createElement("a");
    const link1 = document.createElement("a");
    link.href = jsonString;
    link1.href = jsonString;
    link.download = "data.json";
    link1.download = "data.txt";
    link.click();
    link1.click();
  };
  const exportDataName8 = () => {
    console.log(DataName8 + " data downloading...");
    const doc_ref = db.collection("Measurement");
    const doc_ref2 = doc_ref.doc(DataName8);
    doc_ref2
      .collection("data")
      .orderBy("Time", "asc")
      .onSnapshot(function (snapshot) {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData8(data);
        console.log(data);
      });

    const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
      JSON.stringify(Data8)
    )}`;
    const link = document.createElement("a");
    const link1 = document.createElement("a");
    link.href = jsonString;
    link1.href = jsonString;
    link.download = "data.json";
    link1.download = "data.txt";
    link.click();
    link1.click();
  };
  return (
    <div className="bg-Resulttables">
      <div className="Table-titles-area">
        <ul className="Table-titles">
          <li>Date & Time</li>
          <li>Download Graph/Csv</li>
          <li>Download Json/Txt</li>
        </ul>
        <hr className="Table-line"></hr>
      </div>
      <div className="Table-data-area">
        <ul className="Table-datas">
          <li>{DataName1}</li>
          <li> <input
            type="button"
            value="Click to Open Popup"
            onClick={togglePopup}
          />{isOpen && <Popup
            handleClose={togglePopup}
          />}</li>
         
          <button className="downloadButton" onClick={exportDataName1}>
            <li className="download-image"> </li>{" "}
          </button>
        </ul>

        <ul className="Table-datas">
          <li>{DataName2}</li>
          <li>Click to Open Popup</li>
          <button className="downloadButton" onClick={exportDataName2}>
            <li className="download-image"> </li>{" "}
          </button>
        </ul>
        <ul className="Table-datas">
          <li>{DataName3}</li>
          <li>Click to Open Popup</li>
          <button className="downloadButton" onClick={exportDataName3}>
            <li className="download-image"> </li>{" "}
          </button>
        </ul>

        <ul className="Table-datas">
          <li>{DataName4}</li>
          <li>Click to Open Popup</li>
          <button className="downloadButton" onClick={exportDataName4}>
            <li className="download-image"> </li>{" "}
          </button>
        </ul>
        <ul className="Table-datas">
          <li>{DataName5}</li>
          <li>Click to Open Popup</li>
          <button className="downloadButton" onClick={exportDataName5}>
            <li className="download-image"> </li>{" "}
          </button>
        </ul>

        <ul className="Table-datas">
          <li>{DataName6}</li>
         <li>Click to Open Popup</li>
          <button className="downloadButton" onClick={exportDataName6}>
            <li className="download-image"> </li>{" "}
          </button>
        </ul>
        <ul className="Table-datas">
          <li>{DataName7}</li>
         <li>Click to Open Popup</li>
          <button className="downloadButton" onClick={exportDataName7}>
            <li className="download-image"> </li>{" "}
          </button>
        </ul>

        <ul className="Table-datas">
          <li>{DataName8}</li>
         <li>Click to Open Popup</li>
          <button className="downloadButton" onClick={exportDataName8}>
            <li className="download-image"> </li>{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Resulttables;
