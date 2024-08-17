import { useState } from "react";
import Task, { TaskType } from "../util/Task";
import { OnceDateFilter } from "../util/DateFilter";

enum RepeatType {
  ONCE,
  DAILY,
  WEEKLY,
  MONTHLY,
}

export default function DatePicker({ task }: { task: Task }) {
  const [repeatType, setRepeatType] = useState(RepeatType.ONCE);

  if (task.type === TaskType.DUE && repeatType !== RepeatType.ONCE)
    setRepeatType(RepeatType.ONCE);

  const repeatTypeSelect =
    task.type === TaskType.DUE ? (
      <></>
    ) : (
      <select
        className="ml-1"
        onChange={(event) => setRepeatType(parseInt(event.target.value))}
      >
        <option value={RepeatType.ONCE}>once</option>
        <option value={RepeatType.DAILY}>daily</option>
        <option value={RepeatType.WEEKLY}>weekly</option>
        <option value={RepeatType.MONTHLY}>monthly</option>
      </select>
    );

  let picker = <></>;
  switch (repeatType) {
    case RepeatType.ONCE:
      picker = (
        <input
          type="date"
          defaultValue={
            task.dateFilter instanceof OnceDateFilter
              ? task.dateFilter.date.toISOString().substring(0, 10)
              : ""
          }
          onChange={(event) => {
            task.dateFilter = new OnceDateFilter(
              new Date(event.target.value + "T00:00:00")
            );
          }}
        />
      );
  }

  return (
    <>
      {repeatTypeSelect} on {picker}
    </>
  );
}
