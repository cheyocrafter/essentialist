import { PasswordValidator } from './index';

describe('password validator', () => {
  it("should detect that the 'PasswordValidtor' is defined", () => {
    expect(PasswordValidator).toBeDefined();
  });

  it("should return the correct error object when a password is valid", () => {
    // Arrange
    const password = "Password123"; 
    const passwordValidator = new PasswordValidator(); 
    
    // Act 
    const validationResult = passwordValidator.validate(password)

    // Assert
    expect(validationResult.isValid).toBeTruthy();
    expect(Array.isArray(validationResult.errors)).toBe(true);
    expect(validationResult.errors).toEqual([]);
  })

  it("should return the correct error object when given a password with an invalid minimum length", () => {
      // arrange 
      const password = "1pas";
      const passwordValidator = new PasswordValidator();

      // act 
      const validationResult = passwordValidator.validate(password);

      // assert
      expect(validationResult.isValid).toBeFalsy();
      expect(Array.isArray(validationResult.errors)).toBe(true);
      expect(validationResult.errors.length).toBe(1);
      expect(validationResult.errors[0].type).toMatch(/MIN_LENGTH_ERROR/);
      expect(validationResult.errors[0].message).toMatch(/A password must have a minimum length of 5 characters/);
  });

  it("should return the correct error object when given a password with an invalid maximum length", () => {
    // arrange 
    const password = "Thisisaverylongpasswordwith39characters";
    const passwordValidator = new PasswordValidator();

    // act 
    const validationResult = passwordValidator.validate(password);

    // assert 
    expect(validationResult.isValid).toBeFalsy();
    expect(Array.isArray(validationResult.errors)).toBe(true);
    expect(validationResult.errors.length).toBe(1);
    expect(validationResult.errors[0].type).toMatch(/MAX_LENGTH_ERROR/);
    expect(validationResult.errors[0].message).toMatch(/A password must have a maximum length of 15 characters/);
  });

  it("should return the correct error object when given a password without at least 1 digit", () => {
    // arrange 
    const password = "Password";
    const passwordValidator = new PasswordValidator();

    // act 
    const validationResult = passwordValidator.validate(password);

    // assert 
    expect(validationResult.isValid).toBeFalsy(); 
    expect(Array.isArray(validationResult.errors)).toBe(true);
    expect(validationResult.errors.length).toBe(1);
    expect(validationResult.errors[0].type).toMatch(/NO_DIGIT_ERROR/);
    expect(validationResult.errors[0].message).toMatch(/A password must contain at least 1 digit/);
  })
});

