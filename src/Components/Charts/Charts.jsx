import React from "react";
import { useState } from "react";
import "./Charts.css";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const data = [
  { name: "11.11:23", uv: 50, pv: 2400, amt: 2400 },
  { name: "11.11:50", uv: 400, pv: 2400, amt: 1000 },
  { name: "11.11:58", uv: 50, pv: 2400, amt: 2400 },
  { name: "11.12:04", uv: 150, pv: 100, amt: 1000 },
  { name: "11.12:60", uv: 100, pv: 2400, amt: 2400 },
  { name: "11.13:15", uv: 400, pv: 2400, amt: 1000 },
  { name: "11.13:25", uv: 50, pv: 2400, amt: 2400 },
  { name: "11.13:50", uv: 0, pv: 2400, amt: 1000 },
  { name: "11.13:59", uv: 100, pv: 2400, amt: 2400 },
  { name: "11.14:08", uv: 400, pv: 2400, amt: 1000 },
  { name: "11.14:24", uv: 50, pv: 2400, amt: 2400 },
  { name: "11.14:32", uv: 150, pv: 2400, amt: 1000 },
  { name: "11.11:23", uv: 200, pv: 2400, amt: 2400 },
  { name: "11.11:50", uv: 15, pv: 2400, amt: 1000 },
  { name: "11.11:58", uv: 88, pv: 2400, amt: 2400 },
  { name: "11.12:04", uv: 67, pv: 2400, amt: 1000 },
  { name: "11.12:60", uv: 10, pv: 2400, amt: 2400 },
  { name: "11.13:15", uv: 300, pv: 2400, amt: 1000 },
  { name: "11.13:25", uv: 39, pv: 2400, amt: 2400 },
  { name: "11.13:50", uv: 11, pv: 2400, amt: 1000 },
  { name: "11.13:59", uv: 456, pv: 2400, amt: 2400 },
  { name: "11.14:08", uv: 540, pv: 2400, amt: 1000 },
  { name: "11.14:24", uv: 50, pv: 2400, amt: 2400 },
  { name: "11.14:32", uv: 150, pv: 2400, amt: 1000 },
];

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
  // const [Value, setValue] = useState("");
  // const config = {
  //   databaseURL: "https://picoammeter-database-default-rtdb.firebaseio.com/",
  //   projectId: "picoammeter-database",
  // };
  // firebase.initializeApp(config);
  // const db = firebase.firestore();
  // const doc_ref = db.collection("Measurement")
  // const doc_ref1=  doc_ref.orderBy('Date', 'desc').limit(1);
  // console.log("Data Pulling!");
  // doc_ref1.get().then((snapshot) => {
  //   const data= snapshot.docs.map((doc) => ({
  //     id: doc.id,
  //     ...doc.data(),
  //   }));
  // console.log(data)
  

  // //   // console.log(datas[0].value);
  // //   // console.log(datas[0].Date);
  // //   // setValue(  { name: datas[0].Date, uv: datas[0].value, pv: 2400, amt: 2400 });
  // });
  return (
    <div className="bg-charts">
      <LineChart
        width={600}
        height={350}
        data={data}
        margin={{ top: 0, right: 30, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="uv" stroke="#00FF00" />

        <XAxis dataKey="name" fontSize={"0.6em"} />
        <YAxis fontSize={"0.6em"} />
        <Tooltip cursor={false} content={<CustomTooltip />} />
      </LineChart>
    </div>
  );
};

export default Charts;
