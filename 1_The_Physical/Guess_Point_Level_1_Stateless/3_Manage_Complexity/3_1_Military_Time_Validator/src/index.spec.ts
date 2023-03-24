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
    const actual = militaryTimeValidator.validate(timeRange);

    // assert 
    expect(actual).toBe(expected);
  });
});