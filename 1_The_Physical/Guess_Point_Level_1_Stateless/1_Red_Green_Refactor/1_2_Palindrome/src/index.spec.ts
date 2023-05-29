/*
Grading Checklist

- [ ] I have committed on every single transition from red to green to refactor
- [ ] I have tests that validate the following statements 
  - [X]"mom" returns true
  - [ ]"Mom" returns true
  - [ ]"MoM" returns true
  - [ ]"Momx" returns false
  - [ ]"xMomx" returns true
  - [ ]"Was It A Rat I Saw" returns true
  - [ ]"Never Odd or Even" returns true
  - [ ]"Never Odd or Even1" returns false 
  - [ ]"1Never Odd or Even1" returns true
  - [ ] Once I have made the aforementioned tests pass, I have refactored my test specifications to use it.each() to perform parameterization (see Tip #3 here)
- [ ] There is no duplication in my test code or my production code
*/

import { PalindromeChecker } from './index';

describe('palindrome checker', () => {
  it("should know that 'mom' is a palindrome", () => {
    // arrange 
    const input = "mom"; 
    const palindromeChecker = new PalindromeChecker();

    // action 
    const result = palindromeChecker.isPalindrome(input);

    // assert 
    expect(result).toBeTruthy();
  }); 

  it("should know that 'Dwight' is not a palindrome", () => {
    const input = "Dwight"; 
    const palindromeChecker = new PalindromeChecker(); 

    const result = palindromeChecker.isPalindrome(input);

    expect(result).toBeFalsy();
  })

  it("should know that 'Mom' is a palindrome", () => {
    const input = "Mom"; 
    const palindromeChecker = new PalindromeChecker(); 

    const result = palindromeChecker.isPalindrome(input);

    expect(result).toBeFalsy();
  })


})