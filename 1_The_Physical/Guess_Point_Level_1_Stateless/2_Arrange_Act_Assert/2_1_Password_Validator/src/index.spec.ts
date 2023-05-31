import { PasswordValidator } from './index';

describe('password validator', () => {
  it('knows that "Passw4rd8H2vB72" is between 5 and 15 characters long', () => {
    // arrange and act
    const result = PasswordValidator.validate("Passw4rd8H2vB72")

    // assert
    expect(result.errors).toHaveLength(0);
    expect(result.isValid).toBeTruthy();
  });

  it('knows that "asX6" is NOT between 5 and 15 characters long', () => {
    const result = PasswordValidator.validate("asX6");
    expect(result.errors).toHaveLength(1);
    expect(result.errors[0].type).toMatch(/INVALID_LENGTH_ERROR/);
    expect(result.isValid).toBeFalsy(); 
  })
})