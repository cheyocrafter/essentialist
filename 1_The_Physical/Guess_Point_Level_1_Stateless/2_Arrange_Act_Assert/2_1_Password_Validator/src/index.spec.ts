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
      const password = "1Pas";
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

  it("should return the correct error object when given a password without at least 1 uppercase letter", () => {
    // arrange 
    const password = "passw0rd";
    const passwordValidator = new PasswordValidator();

    // act 
    const validationResult = passwordValidator.validate(password);

    // assert
    expect(validationResult.isValid).toBeFalsy(); 
    expect(Array.isArray(validationResult.errors)).toBe(true);
    expect(validationResult.errors.length).toBe(1);
    expect(validationResult.errors[0].type).toMatch(/NO_UPPERCASE_LETTER_ERROR/);
    expect(validationResult.errors[0].message).toMatch(/A password must contain at least 1 uppercase letter/);
  });

  it("should return the correct object when given a password with a valid length, but without digits or uppercase letters", () => {
    const password = "passw0rd";
    const passwordValidator = new PasswordValidator();

    // act 
    const validationResult = passwordValidator.validate(password);

    // assert 
    expect(validationResult.isValid).toBeFalsy(); 
    expect(Array.isArray(validationResult.errors)).toBe(true);
    expect(validationResult.errors.length).toBe(2);
    expect(validationResult.errors[0].type).toMatch(/NO_DIGIT_ERROR/);
    expect(validationResult.errors[0].message).toMatch(/A password must contain at least 1 digit/);
    expect(validationResult.errors[1].type).toMatch(/NO_UPPERCASE_LETTER_ERROR/);
    expect(validationResult.errors[1].message).toMatch(/A password must contain at least 1 uppercase letter/);
  })
});

