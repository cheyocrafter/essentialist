export class StatsCalculator {
  static calculate(sequence: number[]) {

    return {
      min: sequence.sort((a, b) => a - b)[0]
    }
  }
}