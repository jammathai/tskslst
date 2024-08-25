import DateFilter from "../util/DateFilter";
import { useGlobalContext } from "../util/GlobalContext";
import Task, { TaskColor, TaskType } from "../util/Task";
import TaskElement from "./TaskElement";

export default function DayPane() {
  const { tasks, setTasks, selectedDate, setSelectedTask } = useGlobalContext();

  const filteredTasks = [];
  let totalEstimate = 0;
  for (const task of tasks) {
    if (
      (task.type === TaskType.DUE && task.remainingDays(selectedDate) > 0) ||
      task.dateFilter.check(selectedDate)
    ) {
      totalEstimate += task.dateEstimate(selectedDate);
      filteredTasks.push(task);
    }
  }
  filteredTasks.sort(
    (a, b) =>
      (b.type === TaskType.DO ? b.estimate : b.dateEstimate(selectedDate)) -
      (a.type === TaskType.DO ? a.estimate : a.dateEstimate(selectedDate))
  );
  const taskElements = filteredTasks.map((task) => (
    <TaskElement task={task} showTime={true} key={task.id} />
  ));

  return (
    <div className="w-80 ml-2">
      <h1 className="inline font-bold">
        {selectedDate.toLocaleDateString(undefined, {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </h1>
      <button
        className="text-2xl leading-5 float-right"
        onClick={() => {
          const newTask = new Task(
            "",
            TaskColor.RED,
            0,
            TaskType.DO,
            new DateFilter(selectedDate)
          );
          setTasks([...tasks, newTask]);
          setSelectedTask(newTask);
        }}
      >
        +
      </button>
      <ul className="text-sm">{taskElements}</ul>
      <hr />
      <span>Total</span>
      <span className="float-right text-black text-opacity-50">
        {totalEstimate} hrs
      </span>
    </div>
  );
}
