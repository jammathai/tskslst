import { useGlobalContext } from "../util/GlobalContext";
import TaskElement from "./TaskElement";

export default function Cell({
  timestamp,
  inSelectedMonth,
}: {
  timestamp: number;
  inSelectedMonth: boolean;
}) {
  const { tasks, selectedDate, setSelectedDate } = useGlobalContext();

  const date = new Date(timestamp);
  const filteredTasks = [];
  if (timestamp > new Date().getTime() - 86400000)
    for (const task of tasks) {
      if (task.dateFilter.check(date))
        filteredTasks.push(
          <TaskElement task={task} showTime={false} key={task.id} />
        );
    }

  let style = "size-32 p-0.5 text-xs align-top border-collapse border-2";
  if (timestamp < new Date().getTime() - 86400000) style += " bg-gray-100";
  if (!inSelectedMonth) style += " text-gray-200";
  if (selectedDate.getTime() === date.getTime())
    style += " outline outline-2 outline-offset-[-3px] outline-gray-200";

  return (
    <td onClick={() => setSelectedDate(new Date(timestamp))} className={style}>
      <div className="text-sm text-right pr-0.5">{date.getDate()}</div>
      <ul>{filteredTasks}</ul>
    </td>
  );
}
