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
  Label,

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

const [Date10, setDate10] = useState("");
const [Value10, setValue10] = useState("");
const [Date11, setDate11] = useState("");
const [Value11, setValue11] = useState("");
const [Date12, setDate12] = useState("");
const [Value12, setValue12] = useState("");
const [Date13, setDate13] = useState("");
const [Value13, setValue13] = useState("");
const [Date14, setDate14] = useState("");
const [Value14, setValue14] = useState("");
const [Value15, setValue15] = useState("");
const [Date15, setDate15] = useState("");
const [Value16, setValue16] = useState("");
const [Date16, setDate16] = useState("");
const [Value17, setValue17] = useState("");
const [Date17, setDate17] = useState("");
const [Value18, setValue18] = useState("");
const [Date18, setDate18] = useState("");
const [Value19, setValue19] = useState("");
const [Date19, setDate19] = useState("");




const config = {
  databaseURL: "https://picoammeter-database-default-rtdb.firebaseio.com/",
  projectId: "picoammeter-database",
};
firebase.initializeApp(config);
const db = firebase.firestore();
db.collection("Measurement")
.orderBy("Date", "desc")
.limit(20)
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
  setValue10(data[10].Value);
  setDate10(data[10].Date);
  setValue11(data[11].Value);
  setDate11(data[11].Date);
  setValue12(data[12].Value);
  setDate12(data[12].Date);
  setValue13(data[13].Value);
  setDate13(data[13].Date);
  setValue14(data[14].Value);
  setDate14(data[14].Date);
  setValue15(data[15].Value);
  setDate15(data[15].Date);
  setValue16(data[16].Value);
  setDate16(data[16].Date);
  setValue17(data[17].Value);
  setDate17(data[17].Date);
  setValue18(data[18].Value);
  setDate18(data[18].Date);
  setValue19(data[19].Value);
  setDate19(data[19].Date);
 
});
const data2 = [
  { name: 0, Amper: 0, pv: 2400, amt: 2400 },
  { name: Date19, Amper: Value19, pv: 2400, amt: 2400 },
  { name: Date18, Amper: Value18, pv: 2400, amt: 2400 },
  { name: Date17, Amper: Value17, pv: 2400, amt: 2400 },
  { name: Date16, Amper: Value16, pv: 2400, amt: 2400 },
  { name: Date15, Amper: Value15, pv: 2400, amt: 2400 },
  { name: Date14, Amper: Value14, pv: 2400, amt: 2400 },
  { name: Date13, Amper: Value13, pv: 2400, amt: 2400 },
  { name: Date12, Amper: Value12, pv: 2400, amt: 2400 },
  { name: Date11, Amper: Value11, pv: 2400, amt: 2400 },
  { name: Date10, Amper: Value10, pv: 2400, amt: 2400 },
  { name: Date9, Amper: Value9, pv: 2400, amt: 2400 },
  { name: Date8, Amper: Value8, pv: 2400, amt: 2400 },
  { name: Date7, Amper: Value7, pv: 2400, amt: 2400 },
  { name: Date6, Amper: Value6, pv: 2400, amt: 2400 },
  { name: Date5, Amper: Value5, pv: 2400, amt: 2400 },
  { name: Date4, Amper: Value4, pv: 2400, amt: 2400 },
  { name: Date3, Amper: Value3, pv: 2400, amt: 2400 },
  { name: Date2, Amper: Value2, pv: 2400, amt: 2400 },
  { name: Date1, Amper: Value1, pv: 2400, amt: 2400 },
  { name: Date0, Amper: Value0, pv: 2400, amt: 2400 },
 
 
];
  return (

    <div className="bg-charts">
      <LineChart
        width={500}
        height={350}
        data={data2}
        margin={{ top: 0, right: 30, bottom: 5, left: 0 }}
      >
        <Line type="monotone"   dataKey="Amper" stroke="#00FF00" />

        <XAxis dataKey="name"  fontSize={"0.6em"} ></XAxis>
        <YAxis fontSize={"0.6em"}  domain={[0,Number(Value1*2)]} /> 
        <Tooltip cursor={false} content={<CustomTooltip />} />
      <Legend></Legend>
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
