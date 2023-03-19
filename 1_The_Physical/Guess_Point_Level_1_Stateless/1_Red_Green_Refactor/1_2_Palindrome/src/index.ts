export class PalindromeChecker {
  reverseString(word: string): string {
    return word.split('').reverse().join('');
  }

  isPalindrome(word: string): boolean {
    const reversedWord = this.reverseString(word)
    return reversedWord.toLowerCase().split(' ').join('') === word.toLowerCase().split(' ').join('');
  }
}