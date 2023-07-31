import React, { useState } from "react";
import PropTypes from "prop-types";
import FieldCell from "./FieldCell";
import styles from "../App.module.css";
import Status from "./Status";

const GameBoard = ({ name }) => {
  const initialBoard = Array(9).fill(null);
  const [board, setBoard] = useState(initialBoard);
  const [isXNext, setIsXNext] = useState(true);

  const handleCellClick = (index) => {
    if (board[index] || calculateWinner(board)) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";

    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleRestart = () => {
    setBoard(initialBoard);
    setIsXNext(true);
  };

  const renderCell = (index) => {
    return (
      <FieldCell value={board[index]} onClick={() => handleCellClick(index)} />
    );
  };

  const winner = calculateWinner(board);

  return (
    <>
      <Status
        currentPlayer={isXNext ? "X" : "O"}
        winner={winner}
        isDraw={board.every((cell) => cell !== null) && !winner}
        onRestart={handleRestart}
      />
      <div>
        <h2>Welcome, {name}!</h2>
        {/* {winner && <div className={styles.winner}>Winner: {winner}</div>} */}
      </div>

      <div className={styles.board}>
        <div className={styles.row}>
          {renderCell(0)}
          {renderCell(1)}
          {renderCell(2)}
        </div>
        <div className={styles.row}>
          {renderCell(3)}
          {renderCell(4)}
          {renderCell(5)}
        </div>
        <div className={styles.row}>
          {renderCell(6)}
          {renderCell(7)}
          {renderCell(8)}
        </div>
      </div>
    </>
  );
};

GameBoard.propTypes = {
  name: PropTypes.string,
};

function calculateWinner(board) {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
}

export default GameBoard;
