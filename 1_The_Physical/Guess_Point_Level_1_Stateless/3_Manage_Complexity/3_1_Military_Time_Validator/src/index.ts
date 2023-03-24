export class MilitaryTimeValidator {
  processTimeRange(timeRange: string)  {
    return timeRange.split(" - ");
  }
  
  processTime(time: string) {
    const [hours, minutes] = time.split(":");
    return [parseInt(hours, 10), parseInt(minutes, 10)];
  }

  private isValidTime(time: string): boolean {
    const [hours, minutes] = this.processTime(time);
    return this.isHourValid(hours) && (minutes >= 0 && minutes <= 59)
  }

  private isHourValid(hour: number): boolean {
    return hour >= 0 && hour <= 23
  }
  
  validate(timeRange: string): boolean {
    const [startTime, endTime] = this.processTimeRange(timeRange);
    return this.isValidTime(startTime) && this.isValidTime(endTime);
  }
}