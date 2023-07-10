/*
Grading Checklist

- [X] I have committed on every single transition from red to green to refactor
- [X] I have tests that validate the following statements 
  - [X]"mom" returns true
  - [X]"Mom" returns true
  - [X]"MoM" returns true
  - [X]"Momx" returns false
  - [X]"xMomx" returns true
  - [X]"Was It A Rat I Saw" returns true
  - [X]"Never Odd or Even" returns true
  - [X]"Never Odd or Even1" returns false 
  - [X]"1Never Odd or Even1" returns true
  - [X] Once I have made the aforementioned tests pass, I have refactored my test specifications to use it.each() to perform parameterization (see Tip #3 here)
- [X] There is no duplication in my test code or my production code
*/

import { PalindromeChecker } from './index';

describe('palindrome checker', () => {
  let palindromeChecker: PalindromeChecker; 

  beforeEach(() => {
    palindromeChecker = new PalindromeChecker();
  });

  it.each([
    ["mom"],
    ["Mom"],
    ["MoM"],
    ["xMomx"],
    ["Was It A Rat I Saw"],
    ["Never Odd or Even"],
    ["1Never Odd or Even1"],
  ])("should know that '%s' is a palindrome", (input) => {
    expect(palindromeChecker.isPalindrome(input)).toBeTruthy();
  });

  it.each([
    ["Dwight"],
    ["Momx"],
    ["Never Odd or Even1"],
  ])("should know that '%s' is not a palindrome", (input) => {
    expect(palindromeChecker.isPalindrome(input)).toBeFalsy();
  });
});