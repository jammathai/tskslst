import { useReducer } from "react";
import Task, { TaskType } from "../util/Task";
import { RepeatType } from "../util/DateFilter";

enum Weekday {
  SUNDAY,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

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
      from{" "}
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
      />{" "}
      to{" "}
      <input
        type="date"
        className="h-5 border-b-2"
        defaultValue={
          task.dateFilter.endDate === null
            ? ""
            : task.dateFilter.endDate.toISOString().substring(0, 10)
        }
        onChange={(event) => {
          task.dateFilter.endDate = new Date(event.target.value + "T00:00:00");
        }}
      />
    </>
  );
}

function WeeklyDatePicker({ task }: { task: Task }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  if (task.dateFilter.type !== RepeatType.WEEKLY) return <></>;

  function getButtonStyle(day: Weekday) {
    return `size-5 text-sm bg-${
      task.dateFilter.weekdays[day]
        ? Task.getColor(task.color) + "-500 text-white"
        : "gray-200"
    } rounded-full mr-0.5`;
  }

  function toggleDay(day: Weekday) {
    task.dateFilter.weekdays[day] = !task.dateFilter.weekdays[day];
    forceUpdate();
  }

  return (
    <>
      <button
        className={getButtonStyle(Weekday.SUNDAY)}
        onClick={() => toggleDay(Weekday.SUNDAY)}
      >
        S
      </button>
      <button
        className={getButtonStyle(Weekday.MONDAY)}
        onClick={() => toggleDay(Weekday.MONDAY)}
      >
        M
      </button>
      <button
        className={getButtonStyle(Weekday.TUESDAY)}
        onClick={() => toggleDay(Weekday.TUESDAY)}
      >
        T
      </button>
      <button
        className={getButtonStyle(Weekday.WEDNESDAY)}
        onClick={() => toggleDay(Weekday.WEDNESDAY)}
      >
        W
      </button>
      <button
        className={getButtonStyle(Weekday.THURSDAY)}
        onClick={() => toggleDay(Weekday.THURSDAY)}
      >
        T
      </button>
      <button
        className={getButtonStyle(Weekday.FRIDAY)}
        onClick={() => toggleDay(Weekday.FRIDAY)}
      >
        F
      </button>
      <button
        className={getButtonStyle(Weekday.SATURDAY)}
        onClick={() => toggleDay(Weekday.SATURDAY)}
      >
        S
      </button>{" "}
      from{" "}
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
      />{" "}
      to{" "}
      <input
        type="date"
        className="h-5 border-b-2"
        defaultValue={
          task.dateFilter.endDate === null
            ? ""
            : task.dateFilter.endDate.toISOString().substring(0, 10)
        }
        onChange={(event) => {
          task.dateFilter.endDate = new Date(event.target.value + "T00:00:00");
        }}
      />
    </>
  );
}

function MonthlyDatePicker({ task }: { task: Task }) {
  if (task.dateFilter.type !== RepeatType.MONTHLY) return <></>;

  return (
    <>
      on the{" "}
      <select
        defaultValue={
          task.dateFilter.dayOfMonth === null ? "" : task.dateFilter.dayOfMonth
        }
        onChange={(event) =>
          (task.dateFilter.dayOfMonth = parseInt(event.target.value))
        }
      >
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">8th</option>
        <option value="9">9th</option>
        <option value="10">10th</option>
        <option value="11">11th</option>
        <option value="12">12th</option>
        <option value="13">13th</option>
        <option value="14">14th</option>
        <option value="15">15th</option>
        <option value="16">16th</option>
        <option value="17">17th</option>
        <option value="18">18th</option>
        <option value="19">19th</option>
        <option value="20">20th</option>
        <option value="21">21st</option>
        <option value="22">22nd</option>
        <option value="23">23rd</option>
        <option value="24">24th</option>
        <option value="25">25th</option>
        <option value="26">26th</option>
        <option value="27">27th</option>
        <option value="28">28th</option>
        <option value="29">29th</option>
        <option value="30">30th</option>
        <option value="31">31st</option>
      </select>{" "}
      of every month from{" "}
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
      />{" "}
      to{" "}
      <input
        type="date"
        className="h-5 border-b-2"
        defaultValue={
          task.dateFilter.endDate === null
            ? ""
            : task.dateFilter.endDate.toISOString().substring(0, 10)
        }
        onChange={(event) => {
          task.dateFilter.endDate = new Date(event.target.value + "T00:00:00");
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
      <WeeklyDatePicker task={task} />
      <MonthlyDatePicker task={task} />
    </>
  );
}
