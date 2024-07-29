import logo from "./logo.svg";
import "./App.css";
import DataChart from "./components/DataChart";
import RemoteControl from "./components/ButtonRele";

function App() {
  return (
    <div className="App">
      <p>Holis</p>
      <p>Esta es una prueba</p>
      <RemoteControl />
      <div style={{ width: "500px", height: "500px" }}>
        <DataChart />
      </div>
      <div className="iframe-container">
        <iframe
          src="https://ipphonecamera.deskshare.com"
          title="IP Phone Camera"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
