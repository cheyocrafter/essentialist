export class MilitaryTimeValidator {
  processTimeRange(timeRange: string)  {
    return timeRange.split(" - ");
  }
  
  processTime(time: string) {
    const [hours, minutes] = time.split(":");
    return [parseInt(hours, 10), parseInt(minutes, 10)];
  }

  
  
  validate(timeRange: string): boolean {
    const [startTime, endTime] = this.processTimeRange(timeRange);
    return this.isValidTime(startTime);
  }
}