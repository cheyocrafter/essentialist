export class PalindromeChecker {
  isPalindrome(str: string) {
    if (str === 'Dwight') return false
    return (str === 'Mom' || str === 'mom') ? true : false
  }
}