import { createContext, useContext } from 'react'
import Task from './Task'
import Setter from './Setter'

export const TasksContext = createContext<(
  { tasks: Task[], setTasks: Setter<Task[]> } | null
)>(null)

export function useTasksContext() {
  const context = useContext(TasksContext)
  if (context)
    return context
  else
    throw new Error('This is very bad and I have no idea what happened.')
}
