export interface DateFilter {
  check(date: Date): boolean
}

export class OnceDateFilter implements DateFilter {
  date: Date

  constructor(date: Date) {
    this.date = date
  }

  check(date: Date) {
    return date.getTime() === this.date.getTime()
  }
}
