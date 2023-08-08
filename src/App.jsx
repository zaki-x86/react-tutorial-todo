import { useState, useRef, useEffect } from 'react'
import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import TaskList from './components/TaskList';
import TaskTracker from "./components/TaskTracker";

const appName = "React ToDo";
const appVersion = "v1.0";

const currentTasks = [
  // {id, name, completed}
];


function App() {
  const [tasks, setTasks] = useState([]);
  const idRef = useRef(-1);
  useEffect( () => {idRef.current = idRef.current + 1});

  const appInfo = {appName, appVersion};

  const addTask = (name) => {
    setTasks([
      ... tasks,
      {id:idRef.current, name, completed:false}
    ]);
  };

  return (
    <div className='App'>
      <Header {...appInfo} />
      <AddTodoForm addTask={addTask} />
      <TaskList currentTasks={tasks} />
    </div>
  )
}

export default App;
