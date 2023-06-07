export const hasValidTimePattern = (time: string) => {
  const [hours, minutes] = time.split(":").map(Number);
  if (!(hours >= 0 && hours <= 23)) return false; 
  if (!(minutes >= 0 && minutes <= 59)) return false;
  return true;
}

export const validateTimeRange = (timeRange: string) => {
  const [startTime, endTime] = timeRange.split(' - ');
  return (
    hasValidTimePattern(startTime) && 
    hasValidTimePattern(endTime)
  );
}