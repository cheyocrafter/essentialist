export class PalindromeChecker {
  reverseString(word: string): string {
    return word.split('').reverse().join('');
  }

  stripSpaces(words: string): string {
    return words.split(' ').join("");
  }

  isPalindrome(word: string): boolean {
    const reversedWord = this.reverseString(word)
    return this.stripSpaces(reversedWord.toLowerCase()) === this.stripSpaces(word.toLowerCase());
  }
}