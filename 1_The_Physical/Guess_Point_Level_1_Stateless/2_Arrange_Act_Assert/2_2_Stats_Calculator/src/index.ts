export class StatsCalculator {
  static calculate(sequence: number[]) {

    return {
      min: sequence.sort((a, b) => a - b)[0],
      max: sequence.sort((a, b) => a - b)[sequence.length-1],
      count: sequence.length,
      average: sequence.reduce((acc, curr) => {
        return acc + curr
      }, 0) / sequence.length,
    }
  }
}