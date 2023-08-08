import { useState } from 'react'
import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import TaskList from './components/TaskList';
import TaskTracker from "./components/TaskTracker";

const appName = "React ToDo";
const appVersion = "v1.0";

const addTask = (name) => {
  // this function needs access to tasks object
};

const currentTasks = [
  {
    id: "123",
    task: "Study",
    completed: false
  },
  {
    id: "153",
    task: "Eat",
    completed: true
  }
];

function App() {
  // we need to pass `currentTasks` between 3 sibling components: AddTodoForm, TaskTracker, TaskList
  const appInfo = {appName, appVersion};

  return (
    <div className='App'>
      <Header {...appInfo} />
      <AddTodoForm addTask={addTask} />
      <TaskTracker />
      <TaskList currentTasks={currentTasks} />
    </div>
  )
}

export default App;
