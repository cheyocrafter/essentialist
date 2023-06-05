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

  it('knows that 3 is the maximum value', () => {
    const output = StatsCalculator.calculate([1, 2, 3]);
    expect(output.max).toBe(3);
  });

  it('knows that 53 is the maximum value in [2, 4, 21, -8, 53, 40]', () => {
    const output = StatsCalculator.calculate([2, 4, 21, -8, 53, 40]);
    expect(output.max).toBe(53);
  });


});