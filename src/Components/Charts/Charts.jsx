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
  Legend,
} from "recharts";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";











const formattedData = [
  {
    data_time: "2016-08-12 10:22:04",
    timestamp: +new Date("2016-08-12 10:22:04"),
    "E_value": 43,
  },
  {
    data_time: "2016-08-12 08:49:04",
    timestamp: +new Date("2016-08-12 08:49:04"),
    "2_value": 14,
  },
  {
    data_time: "2016-08-12 07:44:04",
    timestamp: +new Date("2016-08-12 07:44:04"),
    "3_value": 32,
  },
  {
    data_time: "2016-08-12 07:44:04",
    timestamp: +new Date("2016-08-12 07:44:04"),
    "3_value": 22,
  }, {
    data_time: "2016-08-12 07:44:04",
    timestamp: +new Date("2016-08-12 07:44:04"),
    "3_value": 312,
  }, {
    data_time: "2016-08-12 07:44:04",
    timestamp: +new Date("2016-08-12 07:44:04"),
    "3_value": 362,
  }, {
    data_time: "2016-08-12 07:44:04",
    timestamp: +new Date("2016-08-12 07:44:04"),
    "3_value": 322,
  },
];
const channelIds = ["E", "2","3"];


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
db.collection("Measurement")
.orderBy("Date", "desc")
.limit(10)
.onSnapshot(function (snapshot) {
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
const data2 = [
  { name: Date9, uv: Value9, pv: 2400, amt: 2400 },
  { name: Date8, uv: Value8, pv: 2400, amt: 2400 },
  { name: Date7, uv: Value7, pv: 2400, amt: 2400 },
  { name: Date6, uv: Value6, pv: 2400, amt: 2400 },
  { name: Date5, uv: Value5, pv: 2400, amt: 2400 },
  { name: Date4, uv: Value4, pv: 2400, amt: 2400 },
  { name: Date3, uv: Value3, pv: 2400, amt: 2400 },
  { name: Date2, uv: Value2, pv: 2400, amt: 2400 },
  { name: Date1, uv: Value1, pv: 2400, amt: 2400 },
  { name: Date0, uv: Value0, pv: 2400, amt: 2400 },
 
];
  return (

    <div className="bg-charts">
      <LineChart
        width={600}
        height={350}
        data={data2}
        margin={{ top: 0, right: 30, bottom: 5, left: 0 }}
      >
        <Line type="monotone"   dataKey="uv" stroke="#00FF00" />

        <XAxis dataKey="name"  fontSize={"0.6em"} />
        <YAxis fontSize={"0.6em"} domain={[0.0099]} /> 
        <Tooltip cursor={false} content={<CustomTooltip />} />
      </LineChart>

      {/* <LineChart data={formattedData} layout="vertical" width={500}
        height={350}>
        
        <XAxis type="number" />
        <YAxis dataKey="timestamp" type="number" />

       
        <Tooltip  cursor={false} content={<CustomTooltip />}/>
        
        {channelIds.map((id) => {
          return <Line type="monotone"  stroke="#00FF00" key={``} dataKey={`${id}_value`} />;
        })}
      </LineChart> */}
    </div>
  );
};

export default Charts;
