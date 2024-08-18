import Task from "../util/Task";
import { useGlobalContext } from "../util/GlobalContext";

export default function TaskElement({ task }: { task: Task }) {
  const { setSelectedTask } = useGlobalContext();
  return (
    <>
      <li
        className={`text-white bg-${Task.getColor(
          task.color
        )}-500 mb-0.5 p-0.5`}
        onClick={() => setSelectedTask(task)}
      >
        {task.name}
      </li>
    </>
  );
}
