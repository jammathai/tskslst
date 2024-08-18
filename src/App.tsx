import { useState } from "react";
import Calendar from "./components/Calendar";
import DayPane from "./components/DayPane";
import TaskModal from "./components/TaskModal";
import { OnceDateFilter } from "./util/DateFilter";
import Task, { TaskColor, TaskType } from "./util/Task";
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
  const [tasks, setTasks] = useState([
    new Task(
      "Do something",
      TaskColor.RED,
      TaskType.DO,
      new OnceDateFilter(new Date(2024, 7, 6))
    ),
    new Task(
      "Do something else",
      TaskColor.RED,
      TaskType.DO,
      new OnceDateFilter(new Date(2024, 7, 8))
    ),
    new Task(
      "Homework",
      TaskColor.BLUE,
      TaskType.DUE,
      new OnceDateFilter(new Date(2024, 7, 8))
    ),
  ]);

  return (
    <GlobalContext.Provider
      value={{ tasks, setTasks, selectedTask, setSelectedTask }}
    >
      <div className="flex m-auto justify-center">
        <Calendar setSelectedDate={setSelectedDate} />
        <DayPane selectedDate={selectedDate} />
      </div>
      {selectedTask ? <TaskModal /> : <></>}
    </GlobalContext.Provider>
  );
}
