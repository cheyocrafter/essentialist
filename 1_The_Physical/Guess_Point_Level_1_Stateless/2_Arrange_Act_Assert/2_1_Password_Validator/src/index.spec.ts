import { PasswordValidator } from './index';

describe('PasswordValidator', () => {
  it("should be defined", () => {
    expect(PasswordValidator).toBeDefined()
  });

  describe("Password Length Validation", () => {
    it("should return correct object if password length is between 5 and 15 charaters", () => {
      const passwordValidationResult = {
        isValid: true,
        errors: []
      };

      const passwordValidator = new PasswordValidator(); 
      expect(passwordValidator.validate("password1")).toEqual(passwordValidationResult)
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
      expect(passwordValidator.validate("pas1")).toEqual(passwordValidationResult);
    })

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
      expect(passwordValidator.validate("passasdlfkas1fkjalsdf")).toEqual(passwordValidationResult);
    })
  });

  describe("Password Characters Validation", () => {
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
      expect(passwordValidator.validate("password")).toEqual(passwordValidationError)
    })
  });
});

