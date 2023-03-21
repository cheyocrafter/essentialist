import { PasswordValidator } from './index';

describe('PasswordValidator', () => {
  it("should be defined", () => {
    expect(PasswordValidator).toBeDefined()
  });

  it("should return the correct error object if password length is between 5 and 15 charaters", () => {
    const passwordValidationResult = {
      isValid: true,
      errors: []
    };

    const passwordValidator = new PasswordValidator(); 
    expect(passwordValidator.validate("pAssword1")).toEqual(passwordValidationResult)
  });

  it("should return the correct error object if the password length is less than 5 characters", () => {
    const passwordValidationResult = {
      isValid: false,
      errors: [
        {
          type: "PASSWORD_LENGTH_ERROR", 
          message: "password must be between 5 and 15 characters"
        }
      ]
    };

    const passwordValidator = new PasswordValidator(); 
    expect(passwordValidator.validate("pAs1")).toEqual(passwordValidationResult);
  });

  it("should return the correct error object if the password length is greater than 15 characters", () => {
    const passwordValidationResult = {
      isValid: false,
      errors: [
        { 
          type: "PASSWORD_LENGTH_ERROR", 
          message: "password must be between 5 and 15 characters" 
        }
      ]
    };

    const passwordValidator = new PasswordValidator(); 
    expect(passwordValidator.validate("passAsdlfkas1fkjalsdf")).toEqual(passwordValidationResult);
  });

  
  it("should return the correct error object if password does not contain at least 1 digit", () => {
    const passwordValidationError = {
      isValid: false, 
      errors: [
        {
          type: "NO_DIGITS_ERROR", 
          message: "password must contain at least 1 digit"
        }
      ]
    }; 

    const passwordValidator = new PasswordValidator(); 
    expect(passwordValidator.validate("pAssword")).toEqual(passwordValidationError)
  });

  it("should return the correct error object if password does not contain at least one uppercase letter", () => {
    const passwordValidationError = {
      isValid: false, 
      errors: [
        {
          type: "NO_UPPERCASE_LETTER_ERROR", 
          message: "password must contain at least one uppercase letter"
        }
      ]
    }     
    const passwordValidator = new PasswordValidator(); 
    expect(passwordValidator.validate("password123456")).toEqual(passwordValidationError)
  });

});

