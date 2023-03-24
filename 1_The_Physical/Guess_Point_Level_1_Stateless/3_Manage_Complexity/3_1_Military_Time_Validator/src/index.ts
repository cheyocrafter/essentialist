export class MilitaryTimeValidator {
  processTimeRange(timeRange: string)  {
    return timeRange.split(" - ");
  }
  
  processTime(timeRangeList: Array<string>) {
    return timeRangeList.map((timeRange: string) => {
      const [hours, minutes] = timeRange.split(":");
      return [parseInt(hours, 10), parseInt(minutes, 10)];
    });
  }
  
  validate(timeRange: string): boolean {
    const processedTimeRange = this.processTimeRange(timeRange);
    const processedTime = this.processTime(processedTimeRange);
    console.log(processedTime);
    return true;
  }
}