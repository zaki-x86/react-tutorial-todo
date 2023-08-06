import React from 'react';
import Button from './Button';

const Todo = ({task, id, completed}) => {
    return <li>
        <div className="c-cb">
            <input id={"todo-"+id} type="checkbox" defaultChecked={completed} />
            <label className="todo-label" htmlFor={"todo-"+id}>
            {id} - {task}
            </label>
      </div>
      <div className="btn-group">
        <button type="button" className="btn">
        Edit <span className="visually-hidden">{task}</span>
        </button>
        <button type="button" className="btn btn__danger">
        Delete <span className="visually-hidden">{task}</span>
        </button>
    </div>
    </li>
}

export default Todo;