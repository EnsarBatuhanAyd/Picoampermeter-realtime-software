import React from "react";
import { useState } from "react";
import "./Charts.css";
import firebase from "firebase/compat/app";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{` Time: ${label}, Value: ${payload[0].value}`}</p>
      </div>
    );
  }
};

const Charts = () => {
  const [datas, setdata] = useState("");
  const [datal, setlastdata] = useState("");
  const current = new Date();
  const month = current.toLocaleString("default", { month: "long" });
  const cdate = `${current.getDate()} ${month} ${current.getFullYear()}`;
  // const cartificaldate="12 August 2022"

  const db = firebase.firestore();
  const doc_ref = db.collection("Measurement");
  const a = 1;
  const cartificaldate = "12 August 2022";
    const doc_ref2 = doc_ref.doc(cartificaldate);
    console.log(cartificaldate);
    doc_ref2
      .collection("data")
      .orderBy("Time", "asc")
      .onSnapshot(function (snapshot) {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setdata(data);

      });
  // try {
   
  //   const doc_ref2 = doc_ref.doc(cdate);
  //   doc_ref2
  //     .collection("data")
  //     .orderBy("Time", "asc")
  //     .onSnapshot(function (snapshot) {
  //       const data = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setdata(data);
  //       setlastdata(data[data.length - 1].Value);
  //     });

  // }
  // catch (err){
  //   console.error(err.message)
  // } 
  // finally {
  //   const cartificaldate = "12 August 2022";
  //   const doc_ref2 = doc_ref.doc(cartificaldate);
  //   console.log(cartificaldate);
  //   doc_ref2
  //     .collection("data")
  //     .orderBy("Time", "asc")
  //     .onSnapshot(function (snapshot) {
  //       const data = snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         ...doc.data(),
  //       }));
  //       setdata(data);

  //     });
  // }

  return (
    <div className="bg-charts">
      <LineChart
        width={600}
        height={350}
        data={datas}
        margin={{ top: 0, right: 30, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="Value" stroke="#00FF00" />

        <XAxis fontSize={"0.6em"} dataKey="Date"></XAxis>
        <YAxis fontSize={"0.6em"} domain={[datal / 30, datal * 15]} />
        <Tooltip cursor={false} content={<CustomTooltip />} />
      </LineChart>
    </div>
  );
};

export default Charts;
