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

  return (
    <div
      className="fixed w-screen h-screen left-0 top-0 z-0 bg-black bg-opacity-10 flex items-center"
      onClick={closeModal}
    >
      <div
        className="w-80 h-80 m-auto p-1 bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        <h1 className="font-bold">
          <input
            className="w-full"
            defaultValue={selectedTask.name}
            onChange={(event) => (selectedTask.name = event.target.value)}
          />
        </h1>
        <ColorPicker task={selectedTask} />
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
        <DatePicker task={selectedTask} />
      </div>
    </div>
  );
}
