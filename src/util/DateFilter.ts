export interface DateFilter {
  check(date: Date): boolean;
  remainingDays(date: Date): number;
}

export class OnceDateFilter implements DateFilter {
  date: Date;

  constructor(date: Date) {
    this.date = date;
  }

  check(date: Date) {
    return date.getTime() === this.date.getTime();
  }

  remainingDays(date: Date) {
    return (this.date.getTime() - date.getTime()) / 86400000 + 1;
  }
}
