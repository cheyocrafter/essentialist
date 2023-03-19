export class PalindromeChecker {
  isPalindrome(word: string): boolean {
    const reversedWord = word.split('').reverse().join('');
    return reversedWord.toLowerCase().split(' ').join('') === word.toLowerCase().split(' ').join('');
  }
}