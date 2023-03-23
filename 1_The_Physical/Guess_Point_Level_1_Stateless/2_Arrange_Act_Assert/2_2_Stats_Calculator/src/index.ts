export class StatsCalculator {
  minimum(sequence: Array<number>): number {
    return sequence.reduce((acc, curr) => {
      return acc = (acc > curr) ? curr : acc, acc
    }, Infinity);
  }

  maximum(sequence: Array<number>): number {
    const sorted = sequence.sort((a, b) => a - b);
    return sorted[sorted.length-1];
  }
}