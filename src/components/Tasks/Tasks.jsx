import React from "react";
import Task from "../Task/Task";
import styles from "./tasks.module.css";
import Data from "../../data/tasks.json";

const Tasks = ({ value }) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      {Data.map((data) => (
        <ul data-cy="tasks" className={styles.tasks}>
          {/* Task List */}
          <Task value={data.text} done={data.done} />
        </ul>
      ))}
      {value !== "" ? (
        <ul data-cy="tasks" className={styles.tasks}>
          {/* Task List */}
          <Task value={value} data={Data} />
        </ul>
      ) : null}

      <div data-cy="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
