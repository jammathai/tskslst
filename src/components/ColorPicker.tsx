import { useReducer } from "react";
import Task, { TaskColor } from "../util/Task";

export default function ColorPicker({ task }: { task: Task }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  function setColor(color: TaskColor) {
    task.color = color;
    forceUpdate();
  }

  return (
    <div>
      <button
        className={`inline-block align-top w-4 h-4 rounded-full mr-1 outline-2 outline-offset-1 bg-red-500 ${
          task.color === TaskColor.RED ? "outline outline-red-500" : ""
        }`}
        onClick={() => setColor(TaskColor.RED)}
      ></button>
      <button
        className={`inline-block align-top w-4 h-4 rounded-full mr-1 outline-2 outline-offset-1 bg-orange-500 ${
          task.color === TaskColor.ORANGE ? "outline outline-orange-500" : ""
        }`}
        onClick={() => setColor(TaskColor.ORANGE)}
      ></button>
      <button
        className={`inline-block align-top w-4 h-4 rounded-full mr-1 outline-2 outline-offset-1 bg-yellow-500 ${
          task.color === TaskColor.YELLOW ? "outline outline-yellow-500" : ""
        }`}
        onClick={() => setColor(TaskColor.YELLOW)}
      ></button>
      <button
        className={`inline-block align-top w-4 h-4 rounded-full mr-1 outline-2 outline-offset-1 bg-green-500 ${
          task.color === TaskColor.GREEN ? "outline outline-green-500" : ""
        }`}
        onClick={() => setColor(TaskColor.GREEN)}
      ></button>
      <button
        className={`inline-block align-top w-4 h-4 rounded-full mr-1 outline-2 outline-offset-1 bg-cyan-500 ${
          task.color === TaskColor.CYAN ? "outline outline-cyan-500" : ""
        }`}
        onClick={() => setColor(TaskColor.CYAN)}
      ></button>
      <button
        className={`inline-block align-top w-4 h-4 rounded-full mr-1 outline-2 outline-offset-1 bg-blue-500 ${
          task.color === TaskColor.BLUE ? "outline outline-blue-500" : ""
        }`}
        onClick={() => setColor(TaskColor.BLUE)}
      ></button>
      <button
        className={`inline-block align-top w-4 h-4 rounded-full mr-1 outline-2 outline-offset-1 bg-purple-500 ${
          task.color === TaskColor.PURPLE ? "outline outline-purple-500" : ""
        }`}
        onClick={() => setColor(TaskColor.PURPLE)}
      ></button>
      <button
        className={`inline-block align-top w-4 h-4 rounded-full outline-2 outline-offset-1 bg-pink-500 ${
          task.color === TaskColor.PINK ? "outline outline-pink-500" : ""
        }`}
        onClick={() => setColor(TaskColor.PINK)}
      ></button>
    </div>
  );
}
