import { useState } from "react";
import Calendar from "./components/Calendar";
import DayPane from "./components/DayPane";
import TaskModal from "./components/TaskModal";
import Task from "./util/Task";
import { GlobalContext } from "./util/GlobalContext";

export default function App() {
  const [selectedDate, setSelectedDate] = useState(
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    )
  );
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        tasks,
        setTasks,
        selectedDate,
        setSelectedDate,
        selectedTask,
        setSelectedTask,
      }}
    >
      <div className="flex m-auto justify-center">
        <Calendar />
        <DayPane />
      </div>
      {selectedTask ? <TaskModal /> : <></>}
    </GlobalContext.Provider>
  );
}
