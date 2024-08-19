import { useReducer } from "react";
import { useGlobalContext } from "../util/GlobalContext";
import { TaskType } from "../util/Task";
import DatePicker from "./DatePicker";
import ColorPicker from "./ColorPicker";

export default function TaskModal() {
  const { tasks, setTasks, selectedTask, setSelectedTask } = useGlobalContext();
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  if (selectedTask === null)
    throw new Error("Attempted to render task modal with no task selected.");

  function closeModal() {
    setTasks([...tasks]);
    setSelectedTask(null);
  }

  const h1 = (
    <h1 className="font-bold border-b-2">
      <input
        className="w-full"
        placeholder="Task name"
        defaultValue={selectedTask.name}
        onChange={(event) => (selectedTask.name = event.target.value)}
      />
    </h1>
  );

  const estimate = (
    <label className="block">
      Estimate{" "}
      <input
        type="number"
        className="w-12 h-5 border-b-2"
        defaultValue={selectedTask.estimate}
        onChange={(event) =>
          (selectedTask.estimate = parseFloat(event.target.value))
        }
      />{" "}
      hrs
    </label>
  );

  const taskType = (
    <select
      defaultValue={selectedTask.type}
      onChange={(event) => {
        selectedTask.type = parseInt(event.target.value);
        forceUpdate();
      }}
    >
      <option value={TaskType.DUE}>Due</option>
      <option value={TaskType.DO}>Do</option>
    </select>
  );

  return (
    <div
      className="fixed w-screen h-screen left-0 top-0 z-0 bg-black bg-opacity-10 backdrop-blur-md flex items-center"
      onClick={closeModal}
    >
      <div
        className="w-96 h-40 m-auto p-2 bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        {h1}
        <ColorPicker task={selectedTask} />
        {estimate}
        {taskType}
        <DatePicker task={selectedTask} />
      </div>
    </div>
  );
}
