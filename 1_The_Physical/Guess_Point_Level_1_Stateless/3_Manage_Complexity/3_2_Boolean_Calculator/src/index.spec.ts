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

  it('evaluates "NOT TRUE" as false', () => {
    const expression = "NOT TRUE";
    const result = booleanCalculator(expression);
    expect(result).toBe(false);
  });

  it('evaluates "NOT FALSE" as true', () => {
    const expression = "NOT FALSE";
    const result = booleanCalculator(expression);
    expect(result).toBe(true);
  });

});
