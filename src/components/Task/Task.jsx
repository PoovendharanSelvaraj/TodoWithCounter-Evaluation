import React, { useState } from "react";
import Counter from "../Counter/Counter";
import styles from "./task.module.css";

const Task = ({ value, done }) => {
  // NOTE: do not delete `data-cy` key value pair
  const [complete, setComplete] = useState(false);
  const handleCheck = () => {
    let res = done;
    setComplete(res);
  };

  return (
    <li data-cy="task" className={styles.task}>
      {complete == true ? (
        <input type="checkbox" checked data-cy="task-checkbox" />
      ) : (
        <input type="checkbox" data-cy="task-checkbox" onChange={handleCheck} />
      )}
      <div
        data-cy="task-text"
        className={complete == true ? styles.done : null}
      >
        {value}
      </div>
      {/* Counter here */}
      <Counter />
      <button data-cy="task-remove-button">X</button>
    </li>
  );
};

export default Task;
