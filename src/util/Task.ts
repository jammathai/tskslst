import { DateFilter } from "./DateFilter";

export enum TaskType {
  DUE,
  DO,
}

export default class Task {
  static count = 0;

  static fromParent(parent: Task) {
    return new Task(parent.name, parent.type, parent.dateFilter, parent.id);
  }

  name: string;
  type: TaskType;
  dateFilter: DateFilter;
  id: number;

  constructor(
    name: string,
    type: TaskType,
    dateFilter: DateFilter,
    id?: number
  ) {
    this.name = name;
    this.type = type;
    this.dateFilter = dateFilter;
    this.id = id ? id : Task.count++;
  }
}
