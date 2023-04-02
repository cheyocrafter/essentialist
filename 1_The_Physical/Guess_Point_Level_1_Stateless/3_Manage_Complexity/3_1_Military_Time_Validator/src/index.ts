export class MilitaryTimeValidator {
  isValidRange(timeRange: string) {
    if (!(/^\d{2}:\d{2}\s-\s\d{2}:\d{2}$/).test(timeRange)) {
      return false;
    }
    
    return true;
  }
}