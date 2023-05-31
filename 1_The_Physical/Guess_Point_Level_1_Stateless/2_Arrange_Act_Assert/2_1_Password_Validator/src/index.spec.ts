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
  })




  // it('knows that "Passw4rd8H2vB72" is between 5 and 15 characters long', () => {
  //   // arrange and act
  //   const result = PasswordValidator.validate("Passw4rd8H2vB72")

  //   // assert
  //   expect(result.errors).toHaveLength(0);
  //   expect(result.isValid).toBeTruthy();
  // });

  // it('knows that "asX6" is NOT between 5 and 15 characters long', () => {
  //   const result = PasswordValidator.validate("asX6");
  //   expect(result.errors).toHaveLength(1);
  //   expect(result.errors[0].type).toMatch(/INVALID_LENGTH_ERROR/);
  //   expect(result.isValid).toBeFalsy(); 
  // });

  // it('knows that "asX387484945939383779530376" is NOT between 5 and 15 characters', () => {
  //   const result = PasswordValidator.validate("asX387484945939383779530376");
  //   expect(result.errors).toHaveLength(1);
  //   expect(result.errors[0].type).toMatch(/INVALID_LENGTH_ERROR/);
  //   expect(result.isValid).toBeFalsy();
  // });
});