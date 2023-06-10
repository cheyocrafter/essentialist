import { booleanCalculator } from './index';

describe('boolean calculator', () => {
  it('evaluates "TRUE" as true', () => {
    const expression = "TRUE";
    const result = booleanCalculator(expression);
    expect(result).toBe(true);
  });

  it('evaluates "FALSE" as false', () => {
    const expression = "FALSE";
    const result = booleanCalculator(expression);
    expect(result).toBe(false);
  });



});
