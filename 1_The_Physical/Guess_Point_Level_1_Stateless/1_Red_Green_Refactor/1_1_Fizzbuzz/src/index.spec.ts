import { fizzBuzz } from "./fizzbuzz";

/*
Grading Checklist
- I have committed on every single transition from red to green to refactor 
- I have tests that validate the following statements 
	-   _each return value is a string_ 
	-   _3 returns "Fizz"_
	-   _5 returns "Buzz_
	-   _15 returns "FizzBuzz"_
	-   _9 returns "Fizz"_
	-   _43 returns "43"_
	-   _42 returns "Fizz"_
	-   _45 returns "FizzBuzz"_
	-   _102 (you decide, throw an Error or handle some other way)_
	-   _-12 (you decide, throw an Error or handle some other way)_
	-   _any non-number (you decide, throw an Error or handle some other way)_
- Once I have made the aforementioned tests pass, I have refactored my test specifications to use it.each() to perform parameterization ([see Tip #3 here](https://www.essentialist.dev/products/the-software-essentialist/categories/2152752280/posts/2166919573))
- There is no duplication in my test code or my production code

*/
describe("fizzbuzz", () => {
  it.each([
    { input: 15, result: 'FizzBuzz' },
    { input: 45, result: 'FizzBuzz' },
    { input: 90, result: 'FizzBuzz' },
    { input: 3, result: 'Fizz' },
    { input: 6, result: 'Fizz' },
    { input: 9, result: 'Fizz' },
    { input: 5, result: 'Buzz' },
    { input: 25, result: 'Buzz' },
    { input: 50, result: 'Buzz' },
    { input: 11, result: '11' },
    { input: 23, result: '23' },
    { input: 43, result: '43' },
  ])("returns $result for $input", ({input, result }) => {
    expect(fizzBuzz(input)).toBe(result);
  })  

  it('throws an error for numbers over 100', () => {
    expect(fizzBuzz(102)).toThrowError();
  })
});
