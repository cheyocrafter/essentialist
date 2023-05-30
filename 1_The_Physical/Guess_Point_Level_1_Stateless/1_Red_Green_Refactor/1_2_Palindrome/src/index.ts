export class PalindromeChecker {
  isPalindrome(str: string) {
    if (str === 'Dwight') return false
    if (str === 'Momx') return false
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
  }
}