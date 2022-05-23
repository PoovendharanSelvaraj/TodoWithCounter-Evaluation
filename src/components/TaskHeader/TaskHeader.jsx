import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = ({ value }) => {
  // sample values to be replaced
  let totalTask = value.length;
  let unCompletedTask = 0;

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <b data-cy="header-remaining-task">{unCompletedTask}</b>
      <b data-cy="header-total-task">{totalTask}</b>
    </div>
  );
};

export default TaskHeader;
