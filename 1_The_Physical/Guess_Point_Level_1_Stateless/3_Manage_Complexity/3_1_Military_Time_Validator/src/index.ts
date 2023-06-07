const parseTime = (time: string): number[] => {
  return time.split(":").map(Number)
};

const hasValidTimePattern = (time: string) => {
  const [hours, minutes] = parseTime(time)
  if (!(hours >= 0 && hours <= 23)) return false; 
  if (!(minutes >= 0 && minutes <= 59)) return false;
  return true;
}

const hasCorrectOrder = (startTime: string, endTime: string): boolean => {
  const [startHours, startMinutes] = parseTime(startTime);
  const [endHours, endMinutes] = parseTime(endTime);

  const hasValidStartHours = (startHours <= endHours);
  const hasValidStartMinutes = (startMinutes <= endMinutes);

  return hasValidStartHours && hasValidStartMinutes;
}

export const validateTimeRange = (timeRange: string): boolean => {
  const [startTime, endTime] = timeRange.split(' - ');
  
  return (
    hasCorrectOrder(startTime, endTime) && 
    hasValidTimePattern(startTime) && 
    hasValidTimePattern(endTime)
  );
}