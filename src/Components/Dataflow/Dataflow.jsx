import React, { useEffect } from "react";
import "./Dataflow.css";
import { useState } from "react";
import firebase from "firebase/compat/app";

const Dataflow = () => {
  const [Date, setDate] = useState("");
  const [Value, setValue] = useState("");
  const [Date1, setDate1] = useState("");
  const [Value1, setValue1] = useState("");
  const [Date2, setDate2] = useState("");
  const [Value2, setValue2] = useState("");
  const [Date3, setDate3] = useState("");
  const [Value3, setValue3] = useState("");
  const [Date4, setDate4] = useState("");
  const [Value4, setValue4] = useState("");
  const config = {
    databaseURL: "https://picoammeter-database-default-rtdb.firebaseio.com/",
    projectId: "picoammeter-database",
  };

  const db=firebase.firestore()
  db.collection("Measurement")
    .orderBy("Date", "desc")
    .limit(5)
    .onSnapshot(function (snapshot) {
      const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));




      console.log("Current data: ", data);
         setValue(data[0].Value);
    setDate(data[0].Date);
    setValue1(data[1].Value);
    setDate1(data[1].Date);
    setValue2(data[2].Value);
    setDate2(data[2].Date);
    setValue3(data[3].Value);
    setDate3(data[3].Date);
    setValue4(data[4].Value);
    setDate4(data[4].Date);
    });
  return (
    <div className="bg-Dataflow">
      Data recieved Transmission started...
      <h5>Data</h5>
      <li>
        Time = {Date} , Amper = {Value}{" "}
      </li>
      <li>
        Time = {Date1} , Amper = {Value1}{" "}
      </li>
      <li>
        Time = {Date2} , Amper = {Value2}{" "}
      </li>
      <li>
        Time = {Date3} , Amper = {Value3}{" "}
      </li>
      <li>
        Time = {Date4} , Amper = {Value4}{" "}
      </li>
    </div>
  );
};

export default Dataflow;
