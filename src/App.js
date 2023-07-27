import "./App.css";
import GameBoard from "./components/GameTable";

function App() {
  return (
    <div className="container">
      <h1 className="title">Tic-Tac-Toe</h1>
      <GameBoard />
    </div>
  );
}

export default App;
