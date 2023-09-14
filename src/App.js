import './Styles/App.module.css';
import Sidebar from './Components/Sidebar';
import TaskContent from './Components/TaskContent';
import TaskInfo from './Components/TaskInfo';

function App() {
  return (
    <div className='row' style={{height:"100vh"}}>
      <Sidebar />
      <TaskContent/>
      <TaskInfo/>
    </div>
  );
}

export default App;
