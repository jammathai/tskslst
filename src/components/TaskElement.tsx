import Task from '../util/Task'

export default function TaskElement({ task }: { task: Task }) {
  return (
    <li className='text-white bg-blue-500 mb-0.5 p-0.5' onClick={() => console.log(task)}>
      {task.name}
    </li>
  )
}
