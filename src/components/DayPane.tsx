import { useTasksContext } from '../util/TasksContext'
import TaskElement from './TaskElement'

export default function DayPane({ selectedDate }: { selectedDate: Date }) {
  const { tasks } = useTasksContext()

  const filteredTasks = []
  for (const task of tasks) {
    if (task.dateFilter.check(selectedDate))
      filteredTasks.push(<TaskElement task={task} key={task.id} />)
  }

  return (
    <div className='w-80 ml-2'>
      <h1 className='font-bold'>{selectedDate.toLocaleDateString(undefined, {
        'weekday': 'long',
        'year': 'numeric',
        'month': 'long',
        'day': 'numeric',
      })}</h1>
      <ul className='text-sm'>
        {filteredTasks}
      </ul>
    </div>
  )
}
