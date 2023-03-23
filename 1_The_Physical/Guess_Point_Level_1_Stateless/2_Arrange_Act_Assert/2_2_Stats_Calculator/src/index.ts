export class StatsCalculator {
  minimum(sequence: Array<number>): number {
    return this.sortAscending(sequence)[0]
  }

  maximum(sequence: Array<number>): number {
    return this.sortAscending(sequence)[this.count(sequence)-1]
  }

  count(sequence: Array<number>): number {
    return sequence.length;
  }

  average(sequence: Array<number>): number {
    return this.round((this.sum(sequence) / this.count(sequence)), 12);
  }

  private sum(sequence: Array<number>): number { 
    return sequence.reduce((result, currentValue) => result + currentValue, 0);
  }

  private round(value: number, decimalPlaces: number = 2): number {
    return parseFloat(value.toFixed(decimalPlaces))
  }

  private sortAscending(sequence: Array<number>): Array<number> {
    return sequence.sort((a, b) => a - b)
  }
}