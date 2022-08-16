import React, { useEffect, useRef } from "react";
import "./Resulttables.css";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Resulttables = () => {
  const [download, setDownload] = useState([]);
  const downloadLink = useRef();

  const [Data0, setData0] = useState("No Data For View");
  const [Data1, setData1] = useState("No Data For View");
  const [Data2, setData2] = useState("No Data For View");
  const [Data3, setData3] = useState("No Data For View");
  const [Data4, setData4] = useState("No Data For View");
  const [Data5, setData5] = useState("No Data For View");
  const [Data6, setData6] = useState("No Data For View");
  const [Data7, setData7] = useState("No Data For View");
  const [Data8, setData8] = useState("No Data For View");

  const db = firebase.firestore();

  db.collection("Measurement").onSnapshot(function (snapshot) {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    const dataresult = String(data[0].id);
    console.log(data);
    console.log(dataresult);
    setData0(data[0].id);
    setData1(data[1].id);
    setData2(data[2].id);
  });
  const downloadMyCollection = async () => {
    const myCollection = db
      .collection("Measurement")
      .doc(Data0)// I will send doc id
      .collection("data");
    myCollection.onSnapshot(function (snapshot) {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDownload(data);
    });
  };
  useEffect(() => {
    if (!!download.length) downloadLink.current.click();
  }, [download]);

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
          <li>{Data0}</li>
          <li className="download-image">
            <button className="downloadButton" onClick={downloadMyCollection}>
              Download Responses
            </button>

            <a
              href={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(download)
              )}`}
              download="export.json"
              className="hidden"
              ref={downloadLink}
            >
              isHidden
            </a>
          </li>
        </ul>
        <ul className="Table-datas">
          <li>{Data1}</li>
          <li className="download-image"> <button className="downloadButton" onClick={downloadMyCollection}>
              Download Responses
            </button>

            <a
              href={`data:text/json;charset=utf-8,${encodeURIComponent(
                JSON.stringify(download)
              )}`}
              download="export.json"
              className="hidden"
              ref={downloadLink}
            >
              isHidden
            </a></li>
        </ul>
        <ul className="Table-datas">
          <li>{Data2}</li>
          <li className="download-image"></li>
        </ul>
        <ul className="Table-datas">
          <li>{Data3}</li>
          <li className="download-image"></li>
        </ul>
        <ul className="Table-datas">
          <li>{Data4}</li>
          <li className="download-image"></li>
        </ul>
        <ul className="Table-datas">
          <li>{Data5}</li>
          <li className="download-image"></li>
        </ul>
        <ul className="Table-datas">
          <li>{Data6}</li>
          <li className="download-image"></li>
        </ul>
        <ul className="Table-datas">
          <li>{Data7}</li>
          <li className="download-image"></li>
        </ul>
        <ul className="Table-datas">
          <li>{Data8}</li>
          <li className="download-image"></li>
        </ul>
      </div>
    </div>
  );
};

export default Resulttables;
