import { fizzBuzz } from "./fizzbuzz"

describe("fizzbuzz", () => {
  it("should exist", () => {
    expect(fizzBuzz).toBeDefined()
  })

  it("should return 'Fizz' if the number is a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz")
  })

  it("should return 'Buzz' if the number is a multiple of 5", () => {
    expect(fizzBuzz(5)).toBe("Buzz");
  })

  it("should return 'FizzBuzz' if the number is a multiple of 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
  })

  it("should return the number as a string if not divisible by 3, 5 or both", () => {
    expect(fizzBuzz(13)).toBe("13")
  });
});
