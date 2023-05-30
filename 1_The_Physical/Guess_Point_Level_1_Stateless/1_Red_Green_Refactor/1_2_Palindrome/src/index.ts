export class PalindromeChecker {
  isPalindrome(str: string) {
    str = str.replace(/\s/g, '');
    return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
  }
}