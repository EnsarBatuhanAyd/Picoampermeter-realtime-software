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

  const db = firebase.firestore();
  db.collection("Measurement")
    .orderBy("Date", "asc")
    
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
        width={500}
        height={350}
        data={datas}
        margin={{ top: 0, right: 30, bottom: 5, left: 0 }}
      >

        <Line type="monotone" dataKey="Value" stroke="#00FF00" />

        <XAxis fontSize={"0.6em"}dataKey="Date" ></XAxis>
        <YAxis fontSize={"0.6em"} domain={[4.0e-087,1.0e-8]} />
        <Tooltip cursor={false} content={<CustomTooltip />} />
        <Legend></Legend>
      </LineChart>

    </div>
  );
};

export default Charts;
