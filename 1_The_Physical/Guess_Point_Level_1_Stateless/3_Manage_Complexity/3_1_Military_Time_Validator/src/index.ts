export class MilitaryTimeValidator {
  private isValidTime(timeString: string): boolean {
    const [ hours, minutes ] = timeString.split(":").map(Number);
    return (hours >= 0 && hours <= 23) && (minutes >= 0 && minutes <= 59);
  }

  isValidRange(timeRange: string) {
    if (!(/^\d{2}:\d{2}\s-\s\d{2}:\d{2}$/).test(timeRange)) {
      return false;
    }

    // validate start and end times 
    let [startTime, endTime] = timeRange.split(" - "); 
    let [startTimeHours, startTimeMinutes] = startTime.split(":").map(Number);
    let [endTimeHours, endTimeMinutes] = endTime.split(":").map(Number);

    let isValidStartTime = this.isValidTime(startTime); 
    let isValidEndTime = this.isValidTime(endTime); 
    
    // convert start time and end time to milliseconds and compare 
    const startTimeDate = new Date(); 
    startTimeDate.setHours(startTimeHours);
    startTimeDate.setMinutes(startTimeMinutes);
    startTimeDate.setSeconds(0);

    const endTimeDate = new Date(); 
    endTimeDate.setHours(endTimeHours);
    endTimeDate.setMinutes(endTimeMinutes);
    endTimeDate.setSeconds(0);

    return isValidStartTime && isValidEndTime && (startTimeDate.getTime() < endTimeDate.getTime());
  }
}