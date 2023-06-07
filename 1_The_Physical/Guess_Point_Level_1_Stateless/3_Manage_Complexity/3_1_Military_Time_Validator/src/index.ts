const hasValidTimePattern = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  if (!(hours >= 0 && hours <= 23)) return false; 
  if (!(minutes >= 0 && minutes <= 59)) return false;
  return true;
}

const hasCorrectOrder = (startTime: string, endTime: string): boolean => {
  const [startHours, startMinutes] = startTime.split(":").map(Number);
  const [endHours, endMinutes] = endTime.split(":").map(Number);

  if (startHours <= endHours) {
    if (startMinutes <= endMinutes) {
      return true; 
    }
  }

  return false; 
}

export const validateTimeRange = (timeRange: string) => {
  const [startTime, endTime] = timeRange.split(' - ');
  return (
    hasCorrectOrder(startTime, endTime) && 
    hasValidTimePattern(startTime) && 
    hasValidTimePattern(endTime)
  );
}