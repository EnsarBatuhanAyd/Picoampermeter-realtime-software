import "./Css/RealtimePage.css";
import Sidebar from "../Components/Sidebar/Sidebar";

import Devicecontrol from "../Components/DeviceControl/Devicecontrol";
import Dataflow from "../Components/Dataflow/Dataflow";
import Charts from "../Components/Charts/Charts";

function RealtimePage() {
  return (
    <div className="App">
      <div className="App-Content">
        <div className="App-Content-Top">
          <div className="App-Content-Top-Left" >
            <Charts></Charts>
          </div>
          <div className="App-Content-Top-Right">
          <Charts></Charts>
          </div>
        </div>
        <div className="App-Content-Bottom">
          <div className="App-Content-Bottom-Inside">
            <Dataflow></Dataflow>
          </div>
         
        </div>
      </div>
      <div className="App-Sidebar">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default RealtimePage;
