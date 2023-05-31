import { PasswordValidator } from './index';

describe('password validator', () => {
  it('knows that "Passw4rd8H2vB72" is between 5 and 15 characters long', () => {
    // arrange and act
    const result = PasswordValidator.validate("Passw4rd8H2vB72")

    // assert
    expect(result.errors).toHaveLength(0);
    expect(result.isValid).toBeTruthy();
  });
})