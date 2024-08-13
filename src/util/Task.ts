import { DateFilter } from "./DateFilter";

export default class Task {
  static count = 0;

  static fromParent(parent: Task) {
    return new Task(parent.name, parent.dateFilter, parent.id);
  }

  name: string;
  id: number;
  dateFilter: DateFilter;

  constructor(name: string, dateFilter: DateFilter, id?: number) {
    this.name = name;
    this.dateFilter = dateFilter;
    this.id = id ? id : Task.count++;
  }
}
