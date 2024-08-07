import { DateFilter } from './DateFilter'

export default class Task {
  static count = 0
  name: string
  id: number
  dateFilter: DateFilter

  constructor(name: string, dateFilter: DateFilter) {
    this.name = name
    this.id = Task.count++;
    this.dateFilter = dateFilter
  }
}
