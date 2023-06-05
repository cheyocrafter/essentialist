export class StatsCalculator {
  static calculate(sequence: number[]) {

    return {
      min: sequence.sort((a, b) => a - b)[0],
      max: sequence.sort((a, b) => a - b)[sequence.length-1],
      count: sequence.length
    }
  }
}