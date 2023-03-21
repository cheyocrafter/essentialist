import { PasswordValidator, PasswordValidationResult } from './index';

describe('PasswordValidator', () => {

  let passwordValidator: PasswordValidator;
  beforeEach(() => {
    passwordValidator = new PasswordValidator(); 
  })

  it("should be defined", () => {
    expect(PasswordValidator).toBeDefined();
  });

  it("should return the correct error object if password length is between 5 and 15 charaters", () => {
    const expected = {
      isValid: true,
      errors: []
    };

    const actual = passwordValidator.validate("pAssword1");
    expect(actual).toEqual(expected);
  });

  it("should return the correct error object if the password length is less than 5 characters", () => {
    const expected = {
      isValid: false,
      errors: [
        {
          type: "PASSWORD_LENGTH_ERROR", 
          message: "password must be between 5 and 15 characters"
        }
      ]
    };

    const actual = passwordValidator.validate("pAs1");
    expect(actual).toEqual(expected);
  });

  it("should return the correct error object if the password length is greater than 15 characters", () => {
    const expected = {
      isValid: false,
      errors: [
        { 
          type: "PASSWORD_LENGTH_ERROR", 
          message: "password must be between 5 and 15 characters" 
        }
      ]
    };

    const actual = passwordValidator.validate("passAsdlfkas1fkjalsdf");
    expect(actual).toEqual(expected);
  });

  
  it("should return the correct error object if password does not contain at least 1 digit", () => {
    const expected = {
      isValid: false, 
      errors: [
        {
          type: "NO_DIGITS_ERROR", 
          message: "password must contain at least 1 digit"
        }
      ]
    }; 

    const actual = passwordValidator.validate("pAssword");
    expect(expected).toEqual(actual);
  });

  it("should return the correct error object if password does not contain at least one uppercase letter", () => {
    const expected = {
      isValid: false, 
      errors: [
        {
          type: "NO_UPPERCASE_LETTER_ERROR", 
          message: "password must contain at least one uppercase letter"
        }
      ]
    }     
    
    const actual = passwordValidator.validate("password123456");
    expect(actual).toEqual(expected);
  });

  it("should return the correct error object if password does not meet any of the requirements", () => {
    const expected = {
      isValid: false, 
      errors: [
        {
          type: "PASSWORD_LENGTH_ERROR", 
          message: "password must be between 5 and 15 characters"
        },
        {
          type: "NO_DIGITS_ERROR",
          message: "password must contain at least 1 digit"
        },
        {
          type: "NO_UPPERCASE_LETTER_ERROR", 
          message: "password must contain at least one uppercase letter"
        }
      ]
    }
    
    const actual = passwordValidator.validate("hey");
    expect(actual).toEqual(expected);
  });
});

