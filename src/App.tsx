import Calendar from './components/Calendar';
import DayPane from './components/DayPane';
import TaskModal from './components/TaskModal';

export default function App() {
  return (
    <>
      <div className='flex m-auto justify-center'>
        <Calendar />
        <DayPane />
      </div>
      <TaskModal />
    </>
  )
}
