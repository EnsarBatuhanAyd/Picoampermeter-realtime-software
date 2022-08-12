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
  const current = new Date();
  const month = current.toLocaleString("default", { month: "long" });
  const cdate = `${current.getDate()} ${month} ${current.getFullYear()}`;
  console.log(cdate);

  const db = firebase.firestore();
  const doc_ref = db.collection("Measurement");
  const doc_ref2 = doc_ref.doc(cdate);
  doc_ref2
    .collection("data")
    .orderBy("Time", "asc")
    .onSnapshot(function (snapshot) {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
       
      // console.log(data)
      setdata(data)
    
    
    });
    console.log(datas)
  
  return (
    <div className="bg-charts">
      <LineChart
        width={600}
        height={300}
        data={datas}
        margin={{ top: 0, right: 30, bottom: 5, left: 0 }}
      >

        <Line type="monotone" dataKey="Value" stroke="#00FF00" />

        <XAxis fontSize={"0.6em"}dataKey="Date" ></XAxis>
        <YAxis fontSize={"0.6em"} domain={[,1e-5]} />
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Legend></Legend>
      </LineChart>

    </div>
  );
};

export default Charts;
