import { useState } from 'react';
import Calendar from './components/Calendar';
import DayPane from './components/DayPane';
import TaskModal from './components/TaskModal';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <>
      <div className='flex m-auto justify-center'>
        <Calendar setSelectedDate={setSelectedDate} />
        <DayPane selectedDate={selectedDate} />
      </div>
      <TaskModal />
    </>
  )
}
