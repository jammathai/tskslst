import Setter from "../util/Setter";
import { useGlobalContext } from "../util/GlobalContext";
import TaskElement from "./TaskElement";

export default function Cell({
  timestamp,
  setSelectedDate,
}: {
  timestamp: number;
  setSelectedDate: Setter<Date>;
}) {
  const { tasks } = useGlobalContext();
  const date = new Date(timestamp);
  const filteredTasks = [];
  for (const task of tasks) {
    if (task.dateFilter.check(date))
      filteredTasks.push(
        <TaskElement task={task} showTime={false} key={task.id} />
      );
  }

  return (
    <td
      onClick={() => setSelectedDate(new Date(timestamp))}
      className="size-40 text-xs align-top border-collapse border-2"
    >
      <div className="text-sm text-right">{date.getDate()}</div>
      <ul>{filteredTasks}</ul>
    </td>
  );
}
