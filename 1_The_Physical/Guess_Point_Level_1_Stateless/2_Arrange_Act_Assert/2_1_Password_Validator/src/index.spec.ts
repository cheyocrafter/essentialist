import { PasswordValidator } from './index';

describe('PasswordValidator', () => {

  let passwordValidator: PasswordValidator;
  beforeEach(() => {
    passwordValidator = new PasswordValidator(); 
  })

  it("should be defined", () => {
    expect(PasswordValidator).toBeDefined();
  });

  it("should return the correct error object if password length is between 5 and 15 charaters", () => {
    // arrange 
    const expected = {
      isValid: true,
      errors: []
    };

    const password = "pAssword1";

    // act 
    const actual = passwordValidator.validate(password);

    // assert
    expect(actual).toEqual(expected);
  });

  it("should return the correct error object if the password length is less than 5 characters", () => {
    // arrange
    const password = "pAs1";

    // act 
    const actual = passwordValidator.validate(password);

    // assert 
    expect(actual.errors).toBeDefined()
    expect(actual.errors.length).toBe(1);
    expect(actual.errors[0].type).toMatch(/PASSWORD_LENGTH_ERROR/)
    expect(actual.errors[0].message).toMatch(/password must be between 5 and 15 characters/)
    expect(actual.isValid).toBeFalsy();
  });

  it("should return the correct error object if the password length is greater than 15 characters", () => {
    // arrange
    const expected = {
      isValid: false,
      errors: [
        { 
          type: "PASSWORD_LENGTH_ERROR", 
          message: "password must be between 5 and 15 characters" 
        }
      ]
    };

    const password = "passAsdlfkas1fkjalsdf";

    // act
    const actual = passwordValidator.validate(password);

    // assert
    expect(actual).toEqual(expected);
  });

  
  it("should return the correct error object if password does not contain at least 1 digit", () => {
    // arrange
    const expected = {
      isValid: false, 
      errors: [
        {
          type: "NO_DIGITS_ERROR", 
          message: "password must contain at least 1 digit"
        }
      ]
    }; 

    const password = "pAssword";

    // act
    const actual = passwordValidator.validate(password);

    // assert
    expect(expected).toEqual(actual);
  });

  it("should return the correct error object if password does not contain at least one uppercase letter", () => {
    // arrange
    const expected = {
      isValid: false, 
      errors: [
        {
          type: "NO_UPPERCASE_LETTER_ERROR", 
          message: "password must contain at least one uppercase letter"
        }
      ]
    }     
    
    const password = "password123456";

    // act
    const actual = passwordValidator.validate(password);

    // assert
    expect(actual).toEqual(expected);
  });

  it("should return the correct error object if password does not meet any of the requirements", () => {

    // arrange
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

    const password = "hey";

    // act
    const actual = passwordValidator.validate(password);

    // assert
    expect(actual).toEqual(expected);
  });
});

