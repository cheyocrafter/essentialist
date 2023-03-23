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
    return this.round(this.sum(sequence) / this.count(sequence));
  }

  private sum(sequence: Array<number>): number { 
    return sequence.reduce((result, currentValue) => result + currentValue, 0);
  }

  private round(value: number, decimalPlaces: number = 12): number {
    return parseFloat(value.toFixed(decimalPlaces))
  }

  private sortAscending(sequence: Array<number>): Array<number> {
    return sequence.sort((a, b) => a - b)
  }
}