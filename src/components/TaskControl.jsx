import { useState, useRef, useEffect, createContext } from 'react'
import AddTodoForm from "./AddTodoForm";
import TaskList from "./TaskList";
import TaskTracker from "./TaskTracker";
import TaskViewStates from './utility/taskViewStates';

export const TaskContext = createContext([]);

const TaskControl = () => {
    const [tasks, setTasks] = useState([]);
    const [taskView, setTaskView] = useState(TaskViewStates.all)
    const idRef = useRef(-1);
    useEffect( () => {idRef.current = idRef.current + 1});

    const addTask = (name) => {
        setTasks([
          ... tasks,
          {id:idRef.current, name, completed:false}
        ]);
    };

    const removeTask = (id) => {
        setTasks(
            tasks.filter(task => task.id != id)
        );
    };

    const editTask = (id, name) => {
        setTasks(
            tasks.map(task => {
                if(task.id === id) {
                    return {...task, name}
                }
                return task;
            }))
    };

    const completeTask = (id) => {
        setTasks(
            tasks.map(
                task => {
                    if (task.id === id) {
                        return {...task, completed:!task.completed}
                    }
                    return task;
                }))
    };

    const taskChange = {removeTask, editTask, completeTask};

    const handleTaskView = (view) => {
        if (view === TaskViewStates.all) {
          setTaskView(TaskViewStates.all)
        } else if (view === TaskViewStates.active) {
          setTaskView(TaskViewStates.active)
        } else {
          setTaskView(TaskViewStates.completed)
        }
      }

      return <>
        <AddTodoForm addTask={addTask}/>
        <TaskTracker currentTasks={tasks} handleTaskView={handleTaskView} />
        <TaskList currentTasks={tasks} taskView={taskView} taskChange={taskChange}/>
      </>
};

export default TaskControl;