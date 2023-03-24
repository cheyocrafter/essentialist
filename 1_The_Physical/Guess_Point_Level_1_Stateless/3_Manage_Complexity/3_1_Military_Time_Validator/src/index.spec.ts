import { MilitaryTimeValidator } from "./index";

describe('military time validator', () => {
  it("should be able to tell that the 'MilitaryTimeValidator' class is defined", () => {
    expect(MilitaryTimeValidator).toBeDefined();
  });

  it("should be able to tell a string time range is valid", () => {
    // arrange
    const timeRange = "01:12 - 14:32";
    const militaryTimeValidator = new MilitaryTimeValidator();
    const expected = true; 

    // act 
    const actual = militaryTimeValidator.isValidRange(timeRange);

    // assert 
    expect(actual).toBe(expected);
  });

  it("should be albe to tell a string time range is invalid", () => {
    // arrange 
    const timeRange = "25:00 - 12:23"; 
    const militaryTimeValidator = new MilitaryTimeValidator();
    const expected = false; 

    // act 
    const actual = militaryTimeValidator.isValidRange(timeRange);

    // assert 
    expect(actual).toBe(expected);
  })
});