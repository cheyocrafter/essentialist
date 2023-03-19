import { PalindromeChecker } from './index';

describe('palindrome checker', () => {
  it("should show that palindrome class is defined", () => {
    expect(PalindromeChecker).toBeDefined();
  }); 

  it("should detect that 'mom' is a palindrome", () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isPalindrome("mom")).toBeTruthy();
  });

  it("should detect that 'wow' is a palindrome", () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isPalindrome("wow")).toBeTruthy();
  });
});