import React from "react";
import { useState, useEffect } from "react";
import "./ChartsPopup.css";
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
const datadefault = [
  {
    Value: 11,
    Dates: 120,
  },
  {
    Value: 15,
    Dates: 12,
  },
  {
    Value: 5,
    Dates: 10,
  },
  {
    Value: 10,
    Dates: 5,
  },
  {
    Value: 9,
    Dates: 4,
  },
  {
    Value: 10,
    Dates: 8,
  },
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

const ChartsPopup = () => {
  const [datas, setdata] = useState("");
  const [datal, setlastdata] = useState("");
  useEffect(() => {
    setdata(datadefault);
    setlastdata(2);
  });

  //   const [datal, setlastdata] = useState("");
  //   const [hasError, setError] = React.useState(false);
  //   const current = new Date();
  //   const month = current.toLocaleString("default", { month: "long" });
  //   const cdate = `${current.getDate()} ${month} ${current.getFullYear()}`;

  // const cartificaldate="12 August 2022"

  //   const db = firebase.firestore();
  //   const doc_ref = db.collection("Measurement");
  //   const doc_ref2 = doc_ref.doc(cdate);
  //   const doc_ref3 = doc_ref.doc("12 August 2022");
  //   doc_ref2.get().then((doc) => {

  //     doc_ref3
  //             .collection("data")
  //             .orderBy("Time", "asc")

  //             .onSnapshot(function (snapshot) {
  //               const data = snapshot.docs.map((doc) => ({
  //                 id: doc.id,
  //                 ...doc.data(),
  //               }));

  //               setdata(data);
  //               setlastdata(data[data.length - 1].Value);
  //             });

  // //     if (doc.exists) {
  // //         console.log("Document data:", doc.data());
  // //           doc_ref2
  // //       .collection("data")
  // //       .orderBy("Time", "asc")

  // //       .onSnapshot(function (snapshot) {
  // //         const data = snapshot.docs.map((doc) => ({
  // //           id: doc.id,
  // //           ...doc.data(),
  // //         }));

  // //         setdata(data);
  // //         setlastdata(data[data.length - 1].Value);
  // //       });
  // //     } else {

  // //         console.log("No such document!");
  // //         doc_ref3
  // //         .collection("data")
  // //         .orderBy("Time", "asc")

  // //         .onSnapshot(function (snapshot) {
  // //           const data = snapshot.docs.map((doc) => ({
  // //             id: doc.id,
  // //             ...doc.data(),
  // //           }));

  // //           setdata(data);
  // //           setlastdata(data[data.length - 1].Value);
  // //         });

  // //     }
  // // }).catch((error) => {
  // //     console.log("Error getting document:", error);

  // })

  return (
    <div className="bg-charts-popup">
      <LineChart
        width={400}
        height={380}
        data={datas}
        margin={{ top: 10, right: 30, bottom: 5, left: 0 }}
      >
        <Line type="monotone" dataKey="Value" stroke="#00FF00" />

        <XAxis fontSize={"0.6em"} dataKey="Date"></XAxis>
        <YAxis fontSize={"0.6em"} domain={[datal / 2, datal * 2]} />
        <Tooltip cursor={false} content={<CustomTooltip />} />
      </LineChart>
    </div>
  );
};

export default ChartsPopup;
