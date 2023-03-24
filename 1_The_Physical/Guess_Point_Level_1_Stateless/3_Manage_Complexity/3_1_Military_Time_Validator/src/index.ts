export class MilitaryTimeValidator {
  processTimeRange(timeRange: string)  {
    return timeRange.split(" - ");
  }
  
  validate(timeRange: string): boolean {
    const processedTimeRange = this.processTimeRange(timeRange);
    return true;
  }
}