import React from 'react';
import Todo from "./Todo";

const TaskList = (props) => {
   
    return <>
        <h2>Tasks: </h2>
        <ul
            role="list"
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading"
        >
            <Todo task="Eat" id="100" completed />
            <Todo task="Sleep" id="200" />
        </ul>
    </>
}

export default TaskList;