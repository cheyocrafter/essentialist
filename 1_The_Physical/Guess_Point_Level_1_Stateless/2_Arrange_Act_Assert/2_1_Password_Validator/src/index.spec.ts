import { PasswordValidator } from './index';

describe('password validator', () => {

  describe('password length is between 5 and 15 characters long', () => {
    it.each([
      { password: "Passw4rd8H2vB72", isValid: true, errors: [] },
      { password: "Passw4", isValid: true, errors: [] },
      { password: "asX6", isValid: false, errors: [{ type: 'INVALID_LENGTH_ERROR'}] },
      { password: "asX387484945939383779530376", isValid: false, errors: [{ type: 'INVALID_LENGTH_ERROR'}] },
    ])
    ("should return $isValid for '$password'",
    ({ password, isValid, errors }) => {
      const result = PasswordValidator.validate(password);
      expect(result.isValid).toBe(isValid);
      expect(result.errors).toStrictEqual(errors);
    });
  });

  it('should return true because "Passw4" contains at least one digit', () => {
    const result = PasswordValidator.validate("Passw4")
    expect(result.errors).toHaveLength(0);
    expect(result.isValid).toBeTruthy();
  }); 

  it('should return false because "Password" does not contain at least one digit', () => {
    const result = PasswordValidator.validate("Password")
    expect(result.isValid).toBeFalsy();
    expect(result.errors).toHaveLength(1);
    expect(result.errors).toStrictEqual([{ type: "NO_DIGIT_ERROR" }])
  }); 

});