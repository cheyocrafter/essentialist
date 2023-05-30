export class PalindromeChecker {
  private removeSpaces(str: string) {
    return str.replace(/\s/g, '') 
  }

  private reverse(str: string) {
    return str.split('').reverse().join('');
  }

  private lowerCase(str: string) {
    return str.toLowerCase();
  }

  private pipe(...fns: any[]) {
    return (x: any) => fns.reduce((v, f) => f(v), x);
  }

  isPalindrome(str: string) {
    let reversed = this.pipe(
      this.removeSpaces, 
      this.reverse, 
      this.lowerCase
    )(str);

    let notReversed = this.pipe(
      this.removeSpaces,
      this.lowerCase
    )(str)

    return reversed === notReversed;
  }
}