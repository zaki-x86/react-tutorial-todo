import { useState } from "react";
import TaskViewStates from "./utility/taskViewStates";

const TaskTracker = ({currentTasks, handleTaskView}) => {
    const [allButtonPressed, setAllButtonPressed] = useState(false);
    const [activeButtonPressed, setActiveButtonPressed] = useState(false);
    const [completedButtonPressed, setCompletedButtonPressed] = useState(false);

    const onAllButtonPressed = () => {
      setAllButtonPressed(!allButtonPressed);
      setActiveButtonPressed(false);
      setCompletedButtonPressed(false);
      handleTaskView(TaskViewStates.all);
    }

    const onActiveButtonPressed = () => {
      setActiveButtonPressed(!activeButtonPressed);
      setAllButtonPressed(false);
      setCompletedButtonPressed(false);
      handleTaskView(TaskViewStates.active);
    }

    const onCompletedButtonPressed = () => {
      setCompletedButtonPressed(!completedButtonPressed);
      setAllButtonPressed(false);
      setActiveButtonPressed(false);
      handleTaskView(TaskViewStates.completed);
    }

    let headingText = `${currentTasks.length} Total Tasks`;

    if (activeButtonPressed) {
      headingText = `${currentTasks.filter(item => item.completed === false).length} active tasks remaining`
    } else if (completedButtonPressed) {
      headingText = `${currentTasks.filter(item => item.completed === true).length} completed tasks`
    }

    return <>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed={allButtonPressed} onClick={() => onAllButtonPressed() }>
          <span className="visually-hidden">Show </span>
          <span>all</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed={activeButtonPressed} onClick={() => onActiveButtonPressed()}>
          <span className="visually-hidden">Show </span>
          <span>Active</span>
          <span className="visually-hidden"> tasks</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed={completedButtonPressed} onClick={() => onCompletedButtonPressed()}>
          <span className="visually-hidden">Show </span>
          <span>Completed</span>
          <span className="visually-hidden"> tasks</span>
        </button>
    </div>
    <h2 id="list-heading">{headingText}</h2>
  </>
}

export default TaskTracker;