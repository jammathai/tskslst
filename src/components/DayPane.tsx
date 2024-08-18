import { useGlobalContext } from "../util/GlobalContext";
import { TaskType } from "../util/Task";
import TaskElement from "./TaskElement";

export default function DayPane() {
  const { tasks, selectedDate } = useGlobalContext();

  const filteredTasks = [];
  for (const task of tasks) {
    if (
      (task.type === TaskType.DUE &&
        task.dateFilter.remainingDays(selectedDate) > 0) ||
      task.dateFilter.check(selectedDate)
    ) {
      filteredTasks.push(
        <TaskElement task={task} showTime={true} key={task.id} />
      );
    }
  }

  return (
    <div className="w-80 ml-2">
      <h1 className="font-bold">
        {selectedDate.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h1>
      <ul className="text-sm">{filteredTasks}</ul>
    </div>
  );
}
