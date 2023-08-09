import { useState } from 'react';
import TaskEdit from './TaskEdit';

const Todo = ({id, name, completed, taskChange: {removeTask, editTask, completeTask}}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [isCompleted, setIsCompleted] = useState(completed);
    const onDeletButtonClicked = () => removeTask(id);
    const onEditButtonClicked = () => {
        setIsEditing(true);
    }
    
        const toggleEdit = () => {
            setIsEditing(!isEditing);
        }
    
        const onBoxChecked = (e) => {
            e.stopPropagation();
            setIsCompleted(!isCompleted);
            completeTask(id);
        }

    let editButton = <button type="button" className="btn" onClick={onEditButtonClicked}>
    Edit <span className="visually-hidden">{name}</span>
    </button>;

    if (isEditing) {
        editButton = <TaskEdit id={id} editTask={editTask} toggleEdit={toggleEdit} />
    }

    return <li>
        <div className="c-cb">
            <input id={"todo-"+id} type="checkbox" defaultChecked={isCompleted} onClick={onBoxChecked} />
            <label className="todo-label" htmlFor={"todo-"+id}>
            {id} - {name}
            </label>
      </div>
      <div className="btn-group">
        {editButton}
        <button type="button" className="btn btn__danger" onClick={onDeletButtonClicked}>
        Delete <span className="visually-hidden">{name}</span>
        </button>
    </div>
    </li>
}

export default Todo;