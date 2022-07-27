import React from "react";
import "./Dataflow.css";
import { useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const Dataflow = () => {
  const [Date, setDate] = useState("");
  const [Value, setValue] = useState("");
  const config = {
    databaseURL: "https://picoammeter-database-default-rtdb.firebaseio.com/",
    projectId: "picoammeter-database",
  };
  firebase.initializeApp(config);
  const db = firebase.firestore();
  const doc_ref = db.collection("Measurement")
  const doc_ref1=  doc_ref.orderBy('Date', 'desc').limit(1);
  console.log("Data Pulling!");
  doc_ref1.get().then((snapshot) => {
    const data= snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  console.log(data);
  setValue(data[0].value);
  // console.log(data[0].value)
  // console.log(data[0].Date.seconds)
  setDate(data[0].Date.seconds);

  });
  return (
    <div className="bg-Dataflow">
      Data recieved Transmission started...
      <h5>Data</h5>
     
      <li>Time (seconds) = {Date}, Amper = {Value} </li>
     
     
    </div>
  );
};

export default Dataflow;
