import { useRef } from "react";
import { useGlobalContext } from "../util/GlobalContext";
import Task from "../util/Task";

export default function TaskModal() {
  const { tasks, setTasks, selectedTask, setSelectedTask } = useGlobalContext();

  if (!selectedTask) return <></>;

  const newTask = useRef(
    new Task(selectedTask.name, selectedTask.dateFilter, selectedTask.id)
  );

  function closeModal() {
    setTasks(
      tasks.map((task) =>
        task.id === newTask.current.id ? newTask.current : task
      )
    );
    setSelectedTask(null);
  }

  return (
    <div
      className="fixed w-screen h-screen left-0 top-0 z-0 bg-black bg-opacity-10 flex items-center"
      onClick={() => closeModal()}
    >
      <div
        className="w-80 h-80 m-auto p-1 bg-white"
        onClick={(event) => event.stopPropagation()}
      >
        <h1 className="font-bold">
          <input
            className="w-full"
            defaultValue={selectedTask.name}
            onChange={(event) => (newTask.current.name = event.target.value)}
          />
        </h1>
      </div>
    </div>
  );
}
