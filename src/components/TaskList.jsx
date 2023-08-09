import Todo from "./Todo";
import TaskViewStates from "./utility/taskViewStates"

const TaskList = ({currentTasks, taskView, taskChange}) => {
    if (currentTasks.length === 0) {
        return <h2> Start adding new tasks! </h2>
    }

    console.log("taskLists: ", taskView);
    console.log("currentTasks: ", currentTasks);

    let taskList = [];
    if (taskView === TaskViewStates.all) {
        taskList = currentTasks.map(task => (
            <Todo
              id={task.id}
              name={task.name}
              completed={task.completed}
              key={task.id}
              taskChange={taskChange}
            />
          ));
    } else if (taskView === TaskViewStates.active) {
        taskList = currentTasks.filter(task => task.completed === false).map(task => (
            <Todo
              id={task.id}
              name={task.name}
              completed={task.completed}
              key={task.id}
              taskChange={taskChange}
            />
          ));
    } else {
        console.log("showing completed only!");
        taskList = currentTasks.filter(task => task.completed === true).map(task => (
            <Todo
              id={task.id}
              name={task.name}
              completed={task.completed}
              key={task.id}
              taskChange={taskChange}
            />
          ));
    }
    
    console.log("tasks to view: ", taskList);

    return <>
        <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
        >
            {taskList}
        </ul>
    </>
}

export default TaskList;