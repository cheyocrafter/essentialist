import { PasswordValidator } from './index';

describe('PasswordValidator', () => {

  let passwordValidator: PasswordValidator;
  beforeEach(() => {
    passwordValidator = new PasswordValidator(); 
  })

  it("should be defined", () => {
    // arrange
    const actual = PasswordValidator; 

    // act, assert
    expect(actual).toBeDefined();
  });

  it("should return the correct error object if password length is between 5 and 15 charaters", () => {
    // arrange 
    const password = "pAssword1";

    // act 
    const actual = passwordValidator.validate(password);

    // assert
    expect(actual.isValid).toBeTruthy();
    expect(actual.errors).toBeDefined();
    expect(actual.errors.length).toBe(0);
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
    const password = "passAsdlfkas1fkjalsdf";

    // act
    const actual = passwordValidator.validate(password);

    // assert
    expect(actual.isValid).toBeDefined(); 
    expect(actual.isValid).toBeFalsy();
    expect(actual.errors).toBeDefined();
    expect(actual.errors.length).toBe(1);
    expect(actual.errors[0].type).toMatch(/PASSWORD_LENGTH_ERROR/)
    expect(actual.errors[0].message).toMatch(/password must be between 5 and 15 characters/)
  });

  
  it("should return the correct error object if password does not contain at least 1 digit", () => {
    // arrange
    const password = "pAssword";

    // act
    const actual = passwordValidator.validate(password);

    // assert
    expect(actual.isValid).toBeDefined();
    expect(actual.isValid).toBeFalsy();
    expect(actual.errors).toBeDefined();
    expect(actual.errors.length).toBe(1);
    expect(actual.errors[0].type).toBeDefined();
    expect(actual.errors[0].type).toMatch(/NO_DIGITS_ERROR/);
    expect(actual.errors[0].message).toBeDefined();
    expect(actual.errors[0].message).toMatch(/password must contain at least 1 digit/);
  });

  it("should return the correct error object if password does not contain at least one uppercase letter", () => {
    // arrange
    const password = "password123456";

    // act
    const actual = passwordValidator.validate(password);

    // assert
    expect(actual.isValid).toBeDefined();
    expect(actual.isValid).toBeFalsy();
    expect(actual.errors.length).toBe(1);
    expect(actual.errors[0].type).toMatch(/NO_UPPERCASE_LETTER_ERROR/);
    expect(actual.errors[0].message).toMatch(/password must contain at least one uppercase letter/);
  });

  it("should return the correct error object if password does not meet any of the requirements", () => {

    // arrange
    const password = "hey";

    // act
    const actual = passwordValidator.validate(password);

    // assert
    expect(actual.isValid).toBeDefined();
    expect(actual.isValid).toBeFalsy(); 
    expect(actual.errors.length).toBe(3);
    expect(actual.errors[0].type).toMatch(/PASSWORD_LENGTH_ERROR/);
    expect(actual.errors[0].message).toMatch(/password must be between 5 and 15 characters/);
    expect(actual.errors[1].type).toMatch(/NO_DIGITS_ERROR/);
    expect(actual.errors[1].message).toMatch(/password must contain at least 1 digit/);
    expect(actual.errors[2].type).toMatch(/NO_UPPERCASE_LETTER_ERROR/);
    expect(actual.errors[2].message).toMatch(/password must contain at least one uppercase letter/);
  });
});

