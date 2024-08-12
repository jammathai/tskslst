import { DateFilter } from "./DateFilter";

export default class Task {
  static count = 0;
  name: string;
  id: number;
  dateFilter: DateFilter;

  constructor(name: string, dateFilter: DateFilter, id?: number) {
    this.name = name;
    this.dateFilter = dateFilter;
    this.id = id ? id : Task.count++;
  }
}
