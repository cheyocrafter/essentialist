import { StatsCalculator } from './index';

describe('stats calculator', () => {  
  it('should know that `1` is the minimum value', () => {
    const result = StatsCalculator.calculate([1, 2, 3]);
    expect(result.min).toBe(1);
  });

  it('should know that -8 is the minimum value', () => {
    const result = StatsCalculator.calculate([2, 4, 21, -8, 53, 40]);
    expect(result.min).toBe(-8);
  });

  it('should know that 117 is the minimum value', () => {
    const result = StatsCalculator.calculate([117]);
    expect(result.min).toBe(117);
  });

});