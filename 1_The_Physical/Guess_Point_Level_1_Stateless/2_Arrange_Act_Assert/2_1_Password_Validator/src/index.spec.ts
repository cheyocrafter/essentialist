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
});

