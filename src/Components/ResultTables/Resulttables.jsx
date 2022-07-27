import React from "react";
import "./Resulttables.css";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Resulttables = () => {
  const [Date0, setDate0] = useState("");
  const [Value0, setValue0] = useState("");
  const [Date1, setDate1] = useState("");
  const [Value1, setValue1] = useState("");
  const [Date2, setDate2] = useState("");
  const [Value2, setValue2] = useState("");
  const [Date3, setDate3] = useState("");
  const [Value3, setValue3] = useState("");
  const [Date4, setDate4] = useState("");
  const [Value4, setValue4] = useState("");
  const [Value5, setValue5] = useState("");
  const [Date5, setDate5] = useState("");
  const [Value6, setValue6] = useState("");
  const [Date6, setDate6] = useState("");
  const [Value7, setValue7] = useState("");
  const [Date7, setDate7] = useState("");
  const [Value8, setValue8] = useState("");
  const [Date8, setDate8] = useState("");
  const [Value9, setValue9] = useState("");
  const [Date9, setDate9] = useState("");

  const config = {
    databaseURL: "https://picoammeter-database-default-rtdb.firebaseio.com/",
    projectId: "picoammeter-database",
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();

  const doc_ref = db.collection("Measurement").orderBy("Date", "desc").limit(10);

  console.log("Data Pulling!");
  doc_ref.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(data);
    setValue0(data[0].Value);
    setDate0(data[0].Date);
    setValue1(data[1].Value);
    setDate1(data[1].Date);
    setValue2(data[2].Value);
    setDate2(data[2].Date);
    setValue3(data[3].Value);
    setDate3(data[3].Date);
    setValue4(data[4].Value);
    setDate4(data[4].Date);
    setValue5(data[5].Value);
    setDate5(data[5].Date);
    setValue6(data[6].Value);
    setDate6(data[6].Date);
    setValue7(data[7].Value);
    setDate7(data[7].Date);
    setValue8(data[8].Value);
    setDate8(data[8].Date);
    setValue9(data[9].Value);
    setDate9(data[9].Date);
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
          <li>{Date0}</li>
          <li>{Value0}</li>
          <li className="download-image"></li>
        </ul>
        <ul className="Table-datas">
          <li>{Date1}</li>
          <li>{Value1}</li>
          <li className="download-image"></li>
        </ul>
        <ul className="Table-datas">
          <li>{Date2}</li>
          <li>{Value2}</li>
          <li className="download-image"></li>
        </ul>
        <ul className="Table-datas">
        <li>{Date3}</li>
          <li>{Value3}</li>
          <li className="download-image"></li>
        </ul>
        <ul className="Table-datas">
        <li>{Date4}</li>
          <li>{Value4}</li>
          <li className="download-image"></li>
        </ul>
       
        <ul className="Table-datas">
          <li>{Date5}</li>
          <li>{Value5}</li>
          <li className="download-image"></li>
        </ul>
        <ul className="Table-datas">
        <li>{Date6}</li>
          <li>{Value6}</li>
          <li className="download-image"></li>
        </ul>
        <ul className="Table-datas">
        <li>{Date7}</li>
          <li>{Value7}</li>
          <li className="download-image"></li>
        </ul>
        <ul className="Table-datas">
          <li>{Date8}</li>
          <li>{Value8}</li>
          <li className="download-image"></li>
        </ul>
        <ul className="Table-datas">
        <li>{Date9}</li>
          <li>{Value9}</li>
          <li className="download-image"></li>
        </ul>
        
      </div>
    </div>
  );
};

export default Resulttables;
