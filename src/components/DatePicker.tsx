import { useReducer } from "react";
import Task, { TaskType } from "../util/Task";
import { RepeatType } from "../util/DateFilter";

function OnceDatePicker({ task }: { task: Task }) {
  if (task.dateFilter.type !== RepeatType.ONCE) return <></>;

  return (
    <>
      on{" "}
      <input
        type="date"
        className="h-5 border-b-2"
        defaultValue={
          task.dateFilter.date === null
            ? ""
            : task.dateFilter.date.toISOString().substring(0, 10)
        }
        onChange={(event) => {
          task.dateFilter.date = new Date(event.target.value + "T00:00:00");
        }}
      />
    </>
  );
}

function DailyDatePicker({ task }: { task: Task }) {
  if (task.dateFilter.type !== RepeatType.DAILY) return <></>;

  return (
    <>
      <select
        defaultValue={
          task.dateFilter.dailyPeriod === null
            ? ""
            : task.dateFilter.dailyPeriod
        }
        onChange={(event) =>
          (task.dateFilter.dailyPeriod = parseInt(event.target.value))
        }
      >
        <option value="1">every day</option>
        <option value="2">every other day</option>
        <option value="3">every 3 days</option>
        <option value="4">every 4 days</option>
        <option value="5">every 5 days</option>
        <option value="6">every 6 days</option>
      </select>{" "}
      starting{" "}
      <input
        type="date"
        className="h-5 border-b-2"
        defaultValue={
          task.dateFilter.date === null
            ? ""
            : task.dateFilter.date.toISOString().substring(0, 10)
        }
        onChange={(event) => {
          task.dateFilter.date = new Date(event.target.value + "T00:00:00");
        }}
      />
    </>
  );
}

export default function DatePicker({ task }: { task: Task }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  if (task.type === TaskType.DUE && task.dateFilter.type !== RepeatType.ONCE) {
    task.dateFilter.type = RepeatType.ONCE;
    forceUpdate();
  }

  const repeatTypeSelect =
    task.type === TaskType.DUE ? (
      <></>
    ) : (
      <select
        className="ml-1"
        defaultValue={task.dateFilter.type}
        onChange={(event) => {
          task.dateFilter.type = parseInt(event.target.value);
          forceUpdate();
        }}
      >
        <option value={RepeatType.ONCE}>once</option>
        <option value={RepeatType.DAILY}>daily</option>
        <option value={RepeatType.WEEKLY}>weekly</option>
        <option value={RepeatType.MONTHLY}>monthly</option>
      </select>
    );

  return (
    <>
      {repeatTypeSelect} <OnceDatePicker task={task} />
      <DailyDatePicker task={task} />
    </>
  );
}
