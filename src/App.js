import './App.css'
import Header from "./Components/Header"
import RandomImage from "./Components/RandomImage"

function App() {
  return (
    <div className="wrapper">
      <div className="background">
      </div>
      <div className="background-color">
      </div>
      <div className="app">
        <Header />
        <RandomImage />
      </div>
    </div>
  );
}

export default App;
