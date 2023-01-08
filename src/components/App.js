import "../scss/index.scss";
import Calculator from "./Calculator";
import Results from "./Results"

function App() {
  return (
    <div className="App">
      <h2>Kalkulator zużycia fug</h2>
      <Calculator />
      <Results />
    </div>
  );
}

export default App;
