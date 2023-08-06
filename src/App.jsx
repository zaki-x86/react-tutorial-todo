//import { useState } from 'react'
import AddTodoForm from "./components/AddTodoForm";
import Header from "./components/Header";
import TaskList from './components/TaskList';
import TaskTracker from "./components/TaskTracker";
import Todo from "./components/Todo";

const appName = "React ToDo";
const appVersion = "v1.0";

function App() {
const appInfo = {appName, appVersion};

  return (
    <div className='App'>
      <Header {...appInfo} />
      <AddTodoForm />
      <TaskTracker />
      <TaskList/>
    </div>
  )
}

export default App;
