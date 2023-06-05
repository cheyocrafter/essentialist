import { StatsCalculator } from './index';

describe('stats calculator', () => {  
  it('should know that `1` is the minimum value', () => {
    const result = StatsCalculator.calculate([1, 2, 3]);
    expect(result.min).toBe(1);
  });
});