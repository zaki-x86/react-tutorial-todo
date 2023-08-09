import { useState } from "react";

const TaskEdit = ({id, editTask, toggleEdit}) => {
    const [name, setName] = useState("");
    console.log(`received task#${id}`);
    const handleChange = (e) => {
        setName(e.target.value)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(`Updating task#${id} with: ${name}`)
        editTask(id, name);
        setName("");
        toggleEdit();
    }

    return <>
        <input
            type="text"
            id="new-todo-input"
            className="input input__lg"
            autoComplete="off"
            value={name}
            onChange={handleChange}
         />
        <button type="submit" className="btn btn__primary btn__lg" onClick={onSubmit}>
            Change
        </button>
    </>
}

export default TaskEdit;