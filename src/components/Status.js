// src/components/Status.js
import React from "react";
import PropTypes from "prop-types";
import styles from "../App.module.css";

const Status = ({ currentPlayer, winner, isDraw, onRestart }) => {
  let message = "";

  if (winner) {
    message = `Победил игрок: ${winner}`;
  } else if (isDraw) {
    message = "Ничья!";
  } else {
    message = `Ходит игрок: ${currentPlayer}`;
  }

  return (
    <div className={styles.status}>
      <p>{message}</p>
      {winner || isDraw ? (
        <button className={styles.newGame} onClick={onRestart}>
          Начать заново
        </button>
      ) : null}
    </div>
  );
};

Status.propTypes = {
  currentPlayer: PropTypes.string,
  winner: PropTypes.string,
  isDraw: PropTypes.bool,
  onRestart: PropTypes.func,
};

export default Status;
