import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>Holis</p>
      <p>Esta es una prueba</p>
      <div className = "iframe-container">
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
