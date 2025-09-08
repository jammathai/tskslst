import DateFilter from "./DateFilter";
import Task from "./Task";

export function save(tasks: Task[]) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function load(): Task[] {
  const json = localStorage.getItem("tasks");
  if (json === null) return [];

  const tasks: Task[] = [];
  let maxId = 0;
  for (const data of JSON.parse(json)) {
    const task = new Task(
      data.name,
      data.color,
      data.estimate,
      data.type,
      Object.assign(new DateFilter(new Date()), data.dateFilter),
      data.id
    );
    task.dateFilter.date = new Date(data.dateFilter.date);
    task.dateFilter.endDate = new Date(data.dateFilter.endDate);
    tasks.push(task);
    if (task.id > maxId) maxId = task.id;
  }

  Task.count = maxId + 1;

  return tasks;
}
