import { fizzBuzz } from "./fizzbuzz"

describe("fizzbuzz", () => {
  it("should exist", () => {
    expect(fizzBuzz).toBeDefined()
  })

  it("should return 'Fizz' if the number is a multiple of 3", () => {
    expect(fizzBuzz(3)).toBe("Fizz")
  })
});
