export class StatsCalculator {
  minimum(sequence: Array<number>) {
    return sequence.reduce((acc, curr) => {
      return acc = (acc > curr) ? curr : acc, acc
    }, Infinity);
  }
}