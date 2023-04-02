export class MilitaryTimeValidator {
  isValidRange(timeRange: string) {
    if (!(/^\d{2}:\d{2}\s-\s\d{2}:\d{2}$/).test(timeRange)) {
      return false;
    }

    let [startTime, endTime] = timeRange.split(" - "); 
    let [startTimeHours, startTimeMinutes] = startTime.split(":").map(Number);
    
    let [endTimeHours, endTimeMinutes] = endTime.split(":").map(Number);
    let isValidStartTime = (startTimeHours >= 0 && startTimeHours <= 23) 
                        && (startTimeMinutes >= 0 && startTimeMinutes <= 59);
    let isValidEndTime = (endTimeHours >= 0 && endTimeHours <= 23) 
                        && (endTimeMinutes >= 0 && endTimeMinutes <= 59);
    

    
    return isValidStartTime && isValidEndTime;
  }
}