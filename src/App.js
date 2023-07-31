import styles from "./App.module.css";
import GameBoard from "./components/GameTable";

function App({}) {
  const name = "Anna";
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Tic-Tac-Toe</h2>
      <GameBoard name={name} />
    </div>
  );
}

export default App;
