import Credits from "../Components/Credits/Credits";
import Sidebar from "../Components/Sidebar/Sidebar";
import "./Css/CreditPage.css";

function ResultsPage() {
  return (
    <div className="App">
      <div className="App-Content">
        <Credits></Credits>
      </div>

      <div className="App-Sidebar">
        <Sidebar></Sidebar>
      </div>
    </div>
  );
}

export default ResultsPage;
