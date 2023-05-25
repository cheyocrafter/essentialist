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
  it('returns "Fizz" for 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('returns "Buzz" for 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });





});
