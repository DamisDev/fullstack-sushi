import './App.css';
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  return (
      <>
        <Navbar />
          <div className="container">
              <h1>Ordina quello che vuoi</h1>
              <hr/>

              <div className="row">
                <Card />
              </div>
          </div>
      </>
  );
}

export default App;
