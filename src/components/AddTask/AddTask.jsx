import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ setValue }) => {
  // NOTE: do not delete `data-cy` key value pair\
  const [input, setInput] = useState("");

  const inputAdd = () => {
    input !== "" ? setValue(input) : setValue("");
  };
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        type="text"
        placeholder="Add task..."
      />
      <button data-cy="add-task-button" onClick={inputAdd}>
        +
      </button>
    </div>
  );
};

export default AddTask;
