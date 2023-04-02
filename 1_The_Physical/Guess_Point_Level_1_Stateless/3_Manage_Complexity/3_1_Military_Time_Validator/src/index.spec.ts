import { MilitaryTimeValidator } from './index';


describe('military time validator', () => {
  it("should be defined", () => {
    expect(MilitaryTimeValidator).toBeDefined();
  });

  it("should return false when passed an empty string", () => {
    const input = ""; 
    const validator = new MilitaryTimeValidator();

    const result = validator.isValidRange(input);

    expect(result).toBe(false)
  }); 

  it("should know that '01:12-14:32' has an invalid format", () => {
    const input = "01:12-14:32"; 
    const validator = new MilitaryTimeValidator(); 

    const result = validator.isValidRange(input); 

    expect(result).toBe(false)
  });

  it("should know that '01:12 - 14:32' is valid", () => {
    const input = "01:12 - 14:32"; 
    const validator = new MilitaryTimeValidator();
    
    const result = validator.isValidRange(input);

    expect(result).toBe(true)
  })

  it("should know that '22:00 - 25:12' is invalid", () => {
    const input = "22:00 - 25:12"; 
    const validator = new MilitaryTimeValidator();
    
    const result = validator.isValidRange(input);

    expect(result).toBe(false)
  })
});
