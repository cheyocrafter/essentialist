export class StatsCalculator {
  minimum(sequence: Array<number>): number {
    const sorted = sequence.sort((a, b) => a - b);
    return sorted[0];
  }

  maximum(sequence: Array<number>): number {
    const sorted = sequence.sort((a, b) => a - b);
    return sorted[sorted.length-1];
  }

  count(sequence: Array<number>): number {
    return sequence.length;
  }

  average(sequence: Array<number>): number {
    const sum = sequence.reduce((acc, curr) => acc + curr, 0); 
    const num = sequence.length; 
    return parseFloat((sum / num).toFixed(12));
  }

  private sum(sequence: Array<number>): number { 
    return sequence.reduce((result, currentValue) => result + currentValue, 0);
  }
}