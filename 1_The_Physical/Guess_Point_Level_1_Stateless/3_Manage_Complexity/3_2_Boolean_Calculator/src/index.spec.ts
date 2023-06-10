import { booleanCalculator } from './index';

describe('boolean calculator', () => {
  describe("single value", () => {
    it.each([
      ["TRUE", true],
      ["FALSE", false],
    ])('evaluates "%s" as %s', (input: string, output: boolean) => {
      expect(booleanCalculator(input)).toBe(output);
    })
  });

  describe('NOT operator', () => {
    it.each([
      ["NOT TRUE", false],
      ["NOT FALSE", true],
    ])('evaluates "%s" as %s', (input: string, output: boolean) => {
      expect(booleanCalculator(input)).toBe(output);
    })
  })

  describe('AND operator', () => {
    it.each([
      ["TRUE AND FALSE", false],
      ["TRUE AND TRUE", true],
    ])('evaluates "%s" as %s', (input: string, output: boolean) => {
      expect(booleanCalculator(input)).toBe(output);
    });
  });

  it('evaluates "TRUE OR TRUE" as true', () => {
    const expression = "TRUE OR TRUE";
    const result = booleanCalculator(expression);
    expect(result).toBe(true);
  });
  
  it('evaluates "TRUE OR TRUE OR TRUE AND FALSE" as true', () => {
    const expression = "TRUE OR TRUE OR TRUE AND FALSE";
    const result = booleanCalculator(expression);
    expect(result).toBe(true);
  });

  it('evaluates "TRUE OR FALSE AND NOT FALSE" as true', () => {
    const expression = "TRUE OR FALSE AND NOT FALSE";
    const result = booleanCalculator(expression);
    expect(result).toBe(true);
  });


  it('evaluates "(TRUE OR TRUE OR TRUE) AND FALSE" as false', () => {
    const expression = "(TRUE OR TRUE OR TRUE) AND FALSE";
    const result = booleanCalculator(expression);
    expect(result).toBe(false);
  });
  
  it('evaluates "NOT (TRUE AND TRUE)" as false', () => {
    const expression = "(TRUE OR TRUE OR TRUE) AND FALSE";
    const result = booleanCalculator(expression);
    expect(result).toBe(false);
  });

});
