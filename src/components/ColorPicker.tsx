import Task, { TaskColor } from "../util/Task";

export default function ColorPicker({
  task,
  forceUpdate,
}: {
  task: Task;
  forceUpdate: React.DispatchWithoutAction;
}) {
  function setColor(color: TaskColor) {
    task.color = color;
    forceUpdate();
  }

  function getButtonStyle(color: TaskColor) {
    return `inline-block align-middle size-4 rounded-full bg-${Task.getColor(
      color
    )}-${color === task.color ? "500" : "200"} mr-1`;
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
