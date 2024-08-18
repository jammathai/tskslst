import { DateFilter } from "./DateFilter";

export enum TaskType {
  DUE,
  DO,
}

export enum TaskColor {
  RED,
  ORANGE,
  YELLOW,
  GREEN,
  CYAN,
  BLUE,
  PURPLE,
  PINK,
}

export default class Task {
  static count = 0;

  static getColor(color: TaskColor) {
    return [
      "red",
      "orange",
      "yellow",
      "green",
      "cyan",
      "blue",
      "purple",
      "pink",
    ][color];
  }

  name: string;
  color: TaskColor;
  type: TaskType;
  dateFilter: DateFilter;
  id: number;

  constructor(
    name: string,
    color: TaskColor,
    type: TaskType,
    dateFilter: DateFilter,
    id?: number
  ) {
    this.name = name;
    this.color = color;
    this.type = type;
    this.dateFilter = dateFilter;
    this.id = id ? id : Task.count++;
  }
}
