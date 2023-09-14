import Sidebar from './Components/Sidebar';
import TaskContent from './Components/TaskContent';
import TaskInfo from './Components/TaskInfo';

export default function App() {
  return (
    <div className='row' style={{height:"100vh"}}>
      <Sidebar />
      <TaskContent/>
      <TaskInfo/>
    </div>
  );
}
