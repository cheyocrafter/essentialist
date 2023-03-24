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
    return (hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59)
  }
  
  validate(timeRange: string): boolean {
    const [startTime, endTime] = this.processTimeRange(timeRange);
    console.log(this.isValidTime(startTime));
    console.log(this.isValidTime(endTime));
    return this.isValidTime(startTime) && this.isValidTime(endTime);
  }
}