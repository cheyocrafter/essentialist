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

  it('evaluates "TRUE AND FALSE" as false', () => {
    const expression = "TRUE AND FALSE";
    const result = booleanCalculator(expression);
    expect(result).toBe(false);
  });

  it('evaluates "TRUE AND TRUE" as true', () => {
    const expression = "TRUE AND TRUE";
    const result = booleanCalculator(expression);
    expect(result).toBe(true);
  });

  it('evaluates "TRUE OR TRUE" as true', () => {
    const expression = "TRUE OR TRUE";
    const result = booleanCalculator(expression);
    expect(result).toBe(true);
  });

  // it('evaluates "TRUE OR TRUE OR TRUE AND FALSE" as true', () => {});
  // it('evaluates "TRUE OR FALSE AND NOT FALSE" as true', () => {});
  // it('evaluates "(TRUE OR TRUE OR TRUE) AND FALSE" as false', () => {});
  // it('evaluates "NOT (TRUE AND TRUE)" as false', () => {});

});
