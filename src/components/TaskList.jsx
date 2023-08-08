import Todo from "./Todo";
import TaskTracker from "./TaskTracker";

const TaskList = ({currentTasks}) => {
    if (currentTasks.length === 0) {
        return <h2> Start adding new tasks! </h2>
    }

    console.log(currentTasks);
    const taskList = currentTasks.map(task => (
        <Todo
          id={task.id}
          name={task.name}
          completed={task.completed}
          key={task.id}
        />
      ));
      
    return <>
        <TaskTracker currentTasks={currentTasks} />
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