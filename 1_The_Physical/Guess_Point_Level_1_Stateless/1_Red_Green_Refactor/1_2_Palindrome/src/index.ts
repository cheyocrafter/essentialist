export class PalindromeChecker {
  isPalindrome(word: string) {
    const reversedWord = word.split('').reverse().join('');
    return reversedWord.toLowerCase().split(' ').join('') === word.toLowerCase().split(' ').join('');
  }
}