import Setter from '../util/Setter'
import { useTasksContext } from '../util/TasksContext'
import TaskElement from './TaskElement'

export default function Cell(
  {ms, setSelectedDate }: { ms: number, setSelectedDate: Setter<Date> }
) {
  const { tasks } = useTasksContext()
  const date = new Date(ms)
  const filteredTasks = []
  for (const task of tasks) {
    if (task.dateFilter.check(date))
      filteredTasks.push(<TaskElement task={task} key={task.id} />)
  }

  return (
    <td onClick={
      () => setSelectedDate(new Date(ms))
    } className='size-40 text-xs align-top border-collapse border-2'>
      <div className='text-sm text-right'>{date.getDate()}</div>
      <ul>
        {filteredTasks}
      </ul>
    </td>
  )
}
