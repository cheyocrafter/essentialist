export class MilitaryTimeValidator {
  private splitByDelimiter(targetString: string, delimiter: string): string[] {
    return targetString.split(delimiter);
  }
  
  private parseTime(time: string): number[] {
    const [hours, minutes] = this.splitByDelimiter(time, ":");
    return [parseInt(hours, 10), parseInt(minutes, 10)];
  }

  private isValidTime(time: string): boolean {
    const [hours, minutes] = this.parseTime(time);
    return this.isValidHour(hours) && this.isValidMinute(minutes);
  }

  private isValidHour(hour: number): boolean {
    return hour >= 0 && hour <= 23;
  }

  private isValidMinute(minute: number): boolean {
    return minute >= 0 && minute <= 59;
  }

  private hasValidFormat(timeRange: string): boolean {
    const regex = /^([01]\d|2[0-3]):([0-5]\d)\s-\s([01]\d|2[0-3]):([0-5]\d)$/;
    return (regex).test(timeRange)
  }
  
  isValidRange(timeRange: string): boolean {
    const [startTime, endTime] = this.splitByDelimiter(timeRange, " - ");
    return this.hasValidFormat(timeRange) &&  this.isValidTime(startTime) && this.isValidTime(endTime);
  }
}