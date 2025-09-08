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
  if (timestamp > new Date().getTime() - 86400000) {
    for (const task of tasks) {
      if (task.dateFilter.check(date)) filteredTasks.push(task);
    }
  }
  filteredTasks.sort((a, b) => b.estimate - a.estimate);
  const taskElements = filteredTasks.map((task) => (
    <TaskElement task={task} showTime={false} key={task.id} />
  ));

  let tdStyle = "text-xs align-top border-collapse border-2";
  if (timestamp < new Date().getTime() - 86400000) tdStyle += " bg-gray-100";
  if (!inSelectedMonth) tdStyle += " text-gray-200";
  if (selectedDate.getTime() === date.getTime())
    tdStyle += " outline outline-2 outline-offset-[-3px] outline-gray-200";

  return (
    <td
      onClick={() => setSelectedDate(new Date(timestamp))}
      className={tdStyle}
    >
      <div
        className={`size-${
          window.innerHeight < 1020 ? 32 : 40
        } p-0.5 overflow-auto`}
      >
        <div className="text-sm text-right pr-0.5">{date.getDate()}</div>
        <ul>{taskElements}</ul>
      </div>
    </td>
  );
}
