export class NumberOutOfRangeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'NumberOutOfRangeError';
  }
}
