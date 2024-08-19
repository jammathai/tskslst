export enum RepeatType {
  ONCE,
  DAILY,
  WEEKLY,
  MONTHLY,
}

export default class DateFilter {
  type: RepeatType;
  date: Date | null;
  dailyPeriod: number;
  weekdays: boolean[];
  dayOfMonth: number | null;

  constructor() {
    this.type = RepeatType.ONCE;
    this.date = null;
    this.dailyPeriod = 1;
    this.weekdays = [false, false, false, false, false, false, false];
    this.dayOfMonth = null;
  }

  check(date: Date) {
    switch (this.type) {
      case RepeatType.ONCE:
        return this.date !== null && date.getTime() === this.date.getTime();
      case RepeatType.DAILY:
        if (this.date === null) return false;
        const days = Math.round(
          (date.getTime() - this.date.getTime()) / 86400000
        );
        return days >= 0 && days % this.dailyPeriod === 0;
      case RepeatType.WEEKLY:
        return this.weekdays[date.getDay()];
    }
  }
}
