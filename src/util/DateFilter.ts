export enum RepeatType {
  ONCE,
  DAILY,
  WEEKLY,
  MONTHLY,
}

export default class DateFilter {
  type: RepeatType;
  date: Date | null;
  endDate: Date | null;
  dailyPeriod: number;
  weekdays: boolean[];
  dayOfMonth: number;

  constructor() {
    this.type = RepeatType.ONCE;
    this.date = null;
    this.endDate = null;
    this.dailyPeriod = 1;
    this.weekdays = [false, false, false, false, false, false, false];
    this.dayOfMonth = 1;
  }

  inRange(date: Date) {
    if (this.date === null || this.endDate === null) return true;
    return (
      date.getTime() >= this.date.getTime() &&
      date.getTime() <= this.endDate.getTime()
    );
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
        return this.inRange(date) && days % this.dailyPeriod === 0;

      case RepeatType.WEEKLY:
        return this.inRange(date) && this.weekdays[date.getDay()];

      case RepeatType.MONTHLY:
        return this.inRange(date) && date.getDate() === this.dayOfMonth;
    }
  }
}
