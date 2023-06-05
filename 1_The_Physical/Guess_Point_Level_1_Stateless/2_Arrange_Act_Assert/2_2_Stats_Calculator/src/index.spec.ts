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

  it('knows that [1, 2, 3] has 3 items', () => {
    const result = StatsCalculator.calculate([1, 2, 3]);
    expect(result.count).toBe(3)
  });

  it('knows that [2, 4, 21, -8, 53, 40] has 6 items', () => {
    const result = StatsCalculator.calculate([2, 4, 21, -8, 53, 40]);
    expect(result.count).toBe(6)
  });

  it('knows that [117, 118] has 2 items', () => {
    const result = StatsCalculator.calculate([117, 118]);
    expect(result.count).toBe(2);
  });

});