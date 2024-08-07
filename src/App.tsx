import { useState } from 'react'
import Calendar from './components/Calendar'
import DayPane from './components/DayPane'
import TaskModal from './components/TaskModal'
import { OnceDateFilter } from './util/DateFilter'
import Task from './util/Task'
import { TasksContext } from './util/TasksContext'

export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date(
    (new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate()
  ))
  const [tasks, setTasks] = useState([
    new Task('Do something', new OnceDateFilter(new Date(2024, 7, 6))),
    new Task('Do something else', new OnceDateFilter(new Date(2024, 7, 8))),
    new Task('Do a third something', new OnceDateFilter(new Date(2024, 7, 8))),
  ])

  return (
    <TasksContext.Provider value={{ tasks, setTasks }}>
        <div className='flex m-auto justify-center'>
          <Calendar setSelectedDate={setSelectedDate} />
          <DayPane selectedDate={selectedDate} />
        </div>
        <TaskModal />
    </TasksContext.Provider>
  )
}
