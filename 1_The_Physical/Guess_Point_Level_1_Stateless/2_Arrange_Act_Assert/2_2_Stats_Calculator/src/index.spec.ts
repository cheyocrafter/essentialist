import { StatsCalculator } from './index';

describe('stats calculator', () => {  

  describe('it returns the minimum value', () => {
    it.each([
      { input: [1, 2, 3], output: 1},
      { input: [2, 4, 21, -8, 53, 40], output: -8},
      { input: [117], output: 117},
    ])('it knows that $output is the minimum value', ({ input, output }) => {
      const result = StatsCalculator.calculate(input)
      expect(result.min).toBe(output)
    });
  });

  describe('it returns the maximum value', () => {
    it.each([
      { input: [1, 2, 3], output: 3},
      { input: [2, 4, 21, -8, 53, 40], output: 53},
      { input: [117], output: 117},
    ])('it knows that $output is the maximum value in $input', ({ input, output }) => {
      const result = StatsCalculator.calculate(input)
      expect(result.max).toBe(output)
    });
  });

  
  describe('it returns the count of items', () => {
    it.each([
      { input: [1, 2, 3], output: 3},
      { input: [2, 4, 21, -8, 53, 40], output: 6},
      { input: [117, 118], output: 2},
    ])('it knows that $input has $input items', ({ input, output }) => {
      const result = StatsCalculator.calculate(input)
      expect(result.count).toBe(output)
    });
  });

  it('knows that the average of [1, 2, 3] is 2', () => {
    const output = StatsCalculator.calculate([1, 2, 3]);
    expect(output.average).toBe(2);
  });

  it('knows that the average of [2, 4, 21, -8, 53, 40] is 18.666666666666668', () => {
    const output = StatsCalculator.calculate([2, 4, 21, -8, 53, 40]);
    expect(output.average).toBe(18.666666666666668);
  });

  it('knows that the average of [117, 118] is 117.5', () => {
    const output = StatsCalculator.calculate([117, 118]);
    expect(output.average).toBe(117.5);
  });


});