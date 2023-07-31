import React from "react";
import styles from "../App.module.css";

const FieldCell = ({ value, onClick }) => {
  return (
    <button className={styles.cell} onClick={onClick}>
      {value}
    </button>
  );
};

export default FieldCell;
