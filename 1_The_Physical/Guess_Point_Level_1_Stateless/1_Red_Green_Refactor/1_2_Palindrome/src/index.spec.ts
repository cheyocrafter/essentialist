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
  
  it("should detect that 'bill' is a palindrome", () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isPalindrome("bill")).toBeFalsy();
  });
  
  it("should detect that 'bill' is a palindrome", () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isPalindrome("Mom")).toBeTruthy();
  });

  it("should detect that 'Was It A Rat I Saw' is a palindrome", () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isPalindrome("Was It A Rat I Saw")).toBeTruthy();
  });

  it("should detect that 'Never Odd or Even' is a palindrome", () => {
    const palindromeChecker = new PalindromeChecker();
    expect(palindromeChecker.isPalindrome("Never Odd or Even")).toBeTruthy();
  });
});