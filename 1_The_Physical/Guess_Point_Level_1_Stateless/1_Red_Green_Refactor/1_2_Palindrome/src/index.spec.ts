import { PalindromeChecker } from './index';

describe('palindrome checker', () => {
  let palindromeChecker: PalindromeChecker;
  
  beforeEach(() => {
    palindromeChecker = new PalindromeChecker();
  });

  it("should show that palindrome class is defined", () => {
    expect(PalindromeChecker).toBeDefined();
  }); 

  it("should detect that 'mom' is a palindrome", () => {
    expect(palindromeChecker.isPalindrome("mom")).toBeTruthy();
  });

  it("should detect that 'wow' is a palindrome", () => {
    expect(palindromeChecker.isPalindrome("wow")).toBeTruthy();
  });
  
  it("should detect that 'bill' is a palindrome", () => {
    expect(palindromeChecker.isPalindrome("bill")).toBeFalsy();
  });
  
  it("should detect that 'bill' is a palindrome", () => {
    expect(palindromeChecker.isPalindrome("Mom")).toBeTruthy();
  });

  it("should detect that 'Was It A Rat I Saw' is a palindrome", () => {
    expect(palindromeChecker.isPalindrome("Was It A Rat I Saw")).toBeTruthy();
  });

  it("should detect that 'Never Odd or Even' is a palindrome", () => {
    expect(palindromeChecker.isPalindrome("Never Odd or Even")).toBeTruthy();
  });
});