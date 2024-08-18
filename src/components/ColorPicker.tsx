import { useReducer } from "react";
import Task, { TaskColor } from "../util/Task";

export default function ColorPicker({ task }: { task: Task }) {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  function setColor(color: TaskColor) {
    task.color = color;
    forceUpdate();
  }

  function getButtonStyle(color: TaskColor) {
    let style = `inline-block align-middle w-4 h-4 rounded-full bg-${Task.getColor(
      color
    )}-500 outline-2 outline-offset-1 outline-${Task.getColor(color)}-500 mr-1`;
    if (color === task.color) style += " outline";
    if (color !== TaskColor.PINK) style += " mr-1";
    return style;
  }

  return (
    <div>
      <button
        className={getButtonStyle(TaskColor.RED)}
        onClick={() => setColor(TaskColor.RED)}
      ></button>
      <button
        className={getButtonStyle(TaskColor.ORANGE)}
        onClick={() => setColor(TaskColor.ORANGE)}
      ></button>
      <button
        className={getButtonStyle(TaskColor.YELLOW)}
        onClick={() => setColor(TaskColor.YELLOW)}
      ></button>
      <button
        className={getButtonStyle(TaskColor.GREEN)}
        onClick={() => setColor(TaskColor.GREEN)}
      ></button>
      <button
        className={getButtonStyle(TaskColor.CYAN)}
        onClick={() => setColor(TaskColor.CYAN)}
      ></button>
      <button
        className={getButtonStyle(TaskColor.BLUE)}
        onClick={() => setColor(TaskColor.BLUE)}
      ></button>
      <button
        className={getButtonStyle(TaskColor.PURPLE)}
        onClick={() => setColor(TaskColor.PURPLE)}
      ></button>
      <button
        className={getButtonStyle(TaskColor.PINK)}
        onClick={() => setColor(TaskColor.PINK)}
      ></button>
    </div>
  );
}
