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
    const sum = this.sum(sequence)
    const count = this.count(sequence); 
    return parseFloat((sum / count).toFixed(12));
  }

  private sum(sequence: Array<number>): number { 
    return sequence.reduce((result, currentValue) => result + currentValue, 0);
  }
}