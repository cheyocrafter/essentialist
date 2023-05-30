export class PalindromeChecker {
  isPalindrome(str: string) {
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
  }
}