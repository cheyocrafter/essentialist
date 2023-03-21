import { PasswordValidator } from './index';

describe('PasswordValidator', () => {
  it("should be defined", () => {
    expect(PasswordValidator).toBeDefined()
  });

  describe("Password Length Validation", () => {
    it("should return isValid:true and errors:[] if password length is between 5 and 15 charaters", () => {
      const passwordValidationResult = {
        isValid: false,
        errors: []
      };

      const passwordValidator = new PasswordValidator(); 
      expect(passwordValidator.validate("password")).toEqual(passwordValidationResult)
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
      expect(passwordValidator.validate("pass")).toEqual(passwordValidationResult);
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
      expect(passwordValidator.validate("passasdlfkasldfkjalsdf")).toEqual(passwordValidationResult);
    })
  });
});

