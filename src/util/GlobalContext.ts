import { createContext, useContext } from "react";
import Task from "./Task";
import Setter from "./Setter";

export const GlobalContext = createContext<{
  tasks: Task[];
  setTasks: Setter<Task[]>;
  selectedDate: Date;
  setSelectedDate: Setter<Date>;
  selectedTask: Task | null;
  setSelectedTask: Setter<Task | null>;
} | null>(null);

export function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (context) return context;
  else throw new Error("This is very bad and I have no idea what happened.");
}
