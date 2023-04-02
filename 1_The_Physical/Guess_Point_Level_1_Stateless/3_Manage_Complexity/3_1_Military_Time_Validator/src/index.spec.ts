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
  })

});
