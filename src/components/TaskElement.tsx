import Task, { TaskType } from "../util/Task";
import { useGlobalContext } from "../util/GlobalContext";

export default function TaskElement({
  task,
  showTime,
}: {
  task: Task;
  showTime: boolean;
}) {
  const { selectedDate, setSelectedTask } = useGlobalContext();

  const estimate =
    task.type === TaskType.DO
      ? task.estimate + " hrs"
      : Math.round(
          (task.estimate / task.dateFilter.remainingDays(selectedDate)) * 100
        ) /
          100 +
        " hrs/day";

  return (
    <>
      <li
        className={`bg-${Task.getColor(task.color)}-500 mb-0.5 p-0.5`}
        onClick={(event) => {
          setSelectedTask(task);
          event.stopPropagation();
        }}
      >
        <span className="text-white">{task.name}</span>
        {showTime ? (
          <span className={`float-right text-white text-opacity-75`}>
            {estimate}
          </span>
        ) : (
          <></>
        )}
      </li>
    </>
  );
}
