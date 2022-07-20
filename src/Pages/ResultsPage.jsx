import Resulttables from "../Components/ResultTables/Resulttables";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./Css/ResultsPage.css";

function ResultsPage() {
  return (
    <div className="App">
      <div className="App-Content">

        <Resulttables></Resulttables>
      </div>

      <div className="App-Sidebar">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default ResultsPage;
