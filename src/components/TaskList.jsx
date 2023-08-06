import { useState } from 'react'
import Todo from "./Todo";

const TaskList = ({currentTasks}) => {
    const [tasks, setTasks] = useState(currentTasks);

    const taskList = tasks.map(task => (
        <Todo
          id={task.id}
          name={task.name}
          completed={task.completed}
          key={task.id}
        />
      ));

    return <>
        <h2>Tasks: </h2>
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