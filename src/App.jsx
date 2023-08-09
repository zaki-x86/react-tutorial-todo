import Header from "./components/Header";
import TaskControl from './components/TaskControl';

const appName = "React ToDo";
const appVersion = "v1.0";

function App() {
  const appInfo = {appName, appVersion};


  return (
    <div className='App'>
      <Header {...appInfo} />
      <TaskControl />
    </div>
  )
}

export default App;
