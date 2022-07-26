import React, { useEffect } from "react";
import "./Dataflow.css";
import { useState } from "react";
import firebase from "firebase/compat/app";

const Dataflow = () => {
  const [Time, setTime] = useState("");
  const [Value, setValue] = useState("");
  const [Time1, setTime1] = useState("");
  const [Value1, setValue1] = useState("");
  const [Time2, setTime2] = useState("");
  const [Value2, setValue2] = useState("");
  const [Time3, setTime3] = useState("");
  const [Value3, setValue3] = useState("");
  const [Time4, setTime4] = useState("");
  const [Value4, setValue4] = useState("");
  const config = {
    databaseURL: "https://picoammeter-database-default-rtdb.firebaseio.com/",
    projectId: "picoammeter-database",
  };
  const current = new Date();
  const month = current.toLocaleString("default", { month: "long" });
  const cdate = `${current.getDate()} ${month} ${current.getFullYear()}`;
  console.log(cdate);

  const db = firebase.firestore();
  const doc_ref = db.collection("Measurement");
  const doc_ref2 = doc_ref.doc(cdate);
  doc_ref2.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
        doc_ref2
        .collection("data")
        .orderBy("Time", "desc")
        .limit(10)
        .onSnapshot(function (snapshot) {
          const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
    
          console.log(data);
          setValue(data[0].Value);
           setTime(data[0].Time);
          setValue1(data[1].Value);
          setTime1(data[1].Time);
          setValue2(data[2].Value);
          setTime2(data[2].Time);
          setValue3(data[3].Value);
          setTime3(data[3].Time);
          setValue4(data[4].Value);
          setTime4(data[4].Time);
        });
    
    } else {

        console.log("No such document!");
  
        setValue("+1.534603e-06");
        setTime("17:49:59");
        setValue1("+1.513915e-06");
        setTime1("17:49:57");
        setValue2("+1.444438e-06  ");
        setTime2("17:49:56");
        setValue3("+1.512806e-06");
        setTime3("17:49:55");
        setValue4("+1.512806e-05");
        setTime4("17:49:54");
     
    


    }
}).catch((error) => {
    console.log("Error getting document:", error);
})

 
  // .collection("data")
  // .onSnapshot(function (snapshot) {
  //   const data = snapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));

  //   // data=docx.collection("data")
  //   console.log(data);

  // docx.collection("data").onSnapshot(function (snapshot) {
  //   const data = snapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  //   console.log("Current data: ", data);
  // });

  // });
  return (
    <div className="bg-Dataflow">
      Data recieved Transmission started...
      <h5>Data</h5>
      <li>
        Time = {Time} , Amper = {Value}{" "}
      </li>
      <li>
        Time = {Time1} , Amper = {Value1}{" "}
      </li>
      <li>
        Time = {Time2} , Amper = {Value2}{" "}
      </li>
      <li>
        Time = {Time3} , Amper = {Value3}{" "}
      </li>
      <li>
        Time = {Time4} , Amper = {Value4}{" "}
      </li>
    </div>
  );
};

export default Dataflow;
