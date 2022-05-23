import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  let count = 0;
  const [counter, setCounter] = useState(1);
  // NOTE: do not delete `data-cy` key value pair
  const handleDecrease = () => {
    if (counter <= 1) {
      setCounter(1);
    } else {
      setCounter(counter - 1);
    }
  };
  const handleIncrease = () => {
    setCounter(counter + 1);
  };
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={handleDecrease}>
        -
      </button>
      <span data-cy="task-counter-value">{counter}</span>
      <button data-cy="task-counter-decrement-button" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default Counter;
