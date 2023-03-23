import { StatsCalculator } from "./index"


describe('stats calculator', () => {
  it("should detect that 'StatsCalculator' is defined", () => {
    // arrange, act, assert
    expect(StatsCalculator).toBeDefined()
  })

  describe('Return Minimum', () => {
    it.each([
      {expected: -8, sequence: [2, 4, 21, -8, 53, 40]},
      {expected: -298, sequence: [-298, -100, 3, 8574, 2]},
      {expected: 47, sequence: [5899, 84, 20000, 47, 400]},
      {expected: 11, sequence: [83, 274, 11, 57, 23]},
    ])(`should return '$expected' since it is the smallest integer in the sequence '$sequence'`, ({ expected, sequence }) => {
      // const sequence = [2, 4, 21, -8, 53, 40];
      const statsCalculator = new StatsCalculator();
  
      // act 
      const result = statsCalculator.minimum(sequence);
      
      // assert 
      expect(result).toBe(expected);
    });
  })

  it("should find that '53' is the largest value in the '[2, 4, 21, -8, 53, 40]' sequence", () => {
    // arrange 
    const sequence = [2, 4, 21, -8, 53, 40];
    const statsCalculator = new StatsCalculator()

    // act 
    const result = statsCalculator.maximum(sequence);

    // assert
    expect(result).toBe(53)
  });

  it("should return '6' after counting the numbers in the sequence '[1, 2, 3, 4, 5, 6]'", () => {
    // arrange 
    const sequence = [1, 2, 3, 4, 5, 6]; 
    const statsCalculator = new StatsCalculator(); 

    // act 
    const result = statsCalculator.count(sequence); 

    // assert
    expect(result).toBe(6)
  });

  it("should return the average '18.666666666667' rounded to 12 decimal places given the sequence '[2, 4, 21, -8, 53, 40]'", () => {
    // arrange 
    const sequence = [2, 4, 21, -8, 53, 40];
    const statsCalculator = new StatsCalculator(); 

    // act 
    const result = statsCalculator.average(sequence);

    // assert 
    expect(result).toBe(18.666666666667);
  });

})