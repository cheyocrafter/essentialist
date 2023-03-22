import { PasswordValidator } from './index';
import { Password } from "./password";
import { errorsConfigList } from './errors-config';
import { ErrorsManager, IErrorsManager } from './errors-manager';


describe('password validator', () => {
  let errorsManager: IErrorsManager;

  beforeEach(() => {
    errorsManager = new ErrorsManager(errorsConfigList);
  })

  it("should detect that the 'PasswordValidtor' is defined", () => {
    expect(PasswordValidator).toBeDefined();
  });

  it("should return the correct error object when a password is valid", () => {
    // Arrange
    const password = new Password("Password123"); 
    const passwordValidator = new PasswordValidator(password, errorsManager); 
    
    // Act 
    const validationResult = passwordValidator.validate()

    // Assert
    expect(validationResult.isValid).toBeTruthy();
    expect(Array.isArray(validationResult.errors)).toBe(true);
    expect(validationResult.errors).toEqual([]);
  })

  it("should return the correct error object when given a password with an invalid minimum length", () => {
      // arrange 
      const password = new Password("1Pas");
      const passwordValidator = new PasswordValidator(password, errorsManager);

      // act 
      const validationResult = passwordValidator.validate();

      // assert
      expect(validationResult.isValid).toBeFalsy();
      expect(Array.isArray(validationResult.errors)).toBe(true);
      expect(validationResult.errors.length).toBe(1);
      expect(validationResult.errors[0].type).toMatch(/VALID_LENGTH_ERROR/);
      expect(validationResult.errors[0].message).toMatch(/A password must be between 5 and 15 characters/);
  });

  it("should return the correct error object when given a password with an invalid maximum length", () => {
    // arrange 
    const password = new Password("Thisisaverylongpasswordwith39characters");
    const passwordValidator = new PasswordValidator(password, errorsManager);

    // act 
    const validationResult = passwordValidator.validate();

    // assert 
    expect(validationResult.isValid).toBeFalsy();
    expect(Array.isArray(validationResult.errors)).toBe(true);
    expect(validationResult.errors.length).toBe(1);
    expect(validationResult.errors[0].type).toMatch(/VALID_LENGTH_ERROR/);
    expect(validationResult.errors[0].message).toMatch(/A password must be between 5 and 15 characters/);
  });

  it("should return the correct error object when given a password without at least 1 digit", () => {
    // arrange 
    const password = new Password("Password");
    const passwordValidator = new PasswordValidator(password, errorsManager);

    // act 
    const validationResult = passwordValidator.validate();

    // assert 
    expect(validationResult.isValid).toBeFalsy(); 
    expect(Array.isArray(validationResult.errors)).toBe(true);
    expect(validationResult.errors.length).toBe(1);
    expect(validationResult.errors[0].type).toMatch(/NO_DIGIT_ERROR/);
    expect(validationResult.errors[0].message).toMatch(/A password must contain at least 1 digit/);
  })

  it("should return the correct error object when given a password without at least 1 uppercase letter", () => {
    // arrange 
    const password = new Password("passw0rd");
    const passwordValidator = new PasswordValidator(password, errorsManager);

    // act 
    const validationResult = passwordValidator.validate();

    // assert
    expect(validationResult.isValid).toBeFalsy(); 
    expect(Array.isArray(validationResult.errors)).toBe(true);
    expect(validationResult.errors.length).toBe(1);
    expect(validationResult.errors[0].type).toMatch(/NO_UPPERCASE_LETTER_ERROR/);
    expect(validationResult.errors[0].message).toMatch(/A password must contain at least 1 uppercase letter/);
  });

  it("should return the correct object when given a password with a valid length, but without digits or uppercase letters", () => {
    const password = new Password("password");
    const passwordValidator = new PasswordValidator(password, errorsManager);

    // act 
    const validationResult = passwordValidator.validate();

    // assert 
    expect(validationResult.isValid).toBeFalsy(); 
    expect(Array.isArray(validationResult.errors)).toBe(true);
    expect(validationResult.errors.length).toBe(2);
    expect(validationResult.errors[0].type).toMatch(/NO_DIGIT_ERROR/);
    expect(validationResult.errors[0].message).toMatch(/A password must contain at least 1 digit/);
    expect(validationResult.errors[1].type).toMatch(/NO_UPPERCASE_LETTER_ERROR/);
    expect(validationResult.errors[1].message).toMatch(/A password must contain at least 1 uppercase letter/);
  });

  it("should return the correct error object when given a password without correct length, no digit, or uppercase letters", () => {
    // arrange 
    const password = new Password("ok");
    const passwordValidator = new PasswordValidator(password, errorsManager);

    // act 
    const validationResult = passwordValidator.validate();

    // assert
    expect(validationResult.isValid).toBeFalsy(); 
    expect(Array.isArray(validationResult.errors)).toBe(true);
    expect(validationResult.errors.length).toBe(3);
    expect(validationResult.errors[0].type).toMatch(/INVALID_LENGTH_ERROR/);
    expect(validationResult.errors[0].message).toMatch(/A password must be between 5 and 15 characters/);
    expect(validationResult.errors[1].type).toMatch(/NO_DIGIT_ERROR/);
    expect(validationResult.errors[1].message).toMatch(/A password must contain at least 1 digit/);
    expect(validationResult.errors[2].type).toMatch(/NO_UPPERCASE_LETTER_ERROR/);
    expect(validationResult.errors[2].message).toMatch(/A password must contain at least 1 uppercase letter/);
  });
});

