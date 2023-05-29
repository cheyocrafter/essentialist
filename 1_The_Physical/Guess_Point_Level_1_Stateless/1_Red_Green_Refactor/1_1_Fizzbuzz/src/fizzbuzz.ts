import { NumberOutOfRangeError } from "./error";

export function fizzBuzz(num: number) {
  if (num > 100) {
    throw new NumberOutOfRangeError("Number argument should not exceed 100");
  }

  if (num < 1) {
    throw new NumberOutOfRangeError("Number argument should not be less than 1");
  }

  const isMultipleOfThree = num % 3 === 0; 
  const isMultipleOfFive = num % 5 === 0; 
  const isMultipleOfThreeAndFive = isMultipleOfThree && isMultipleOfFive;

  if (isMultipleOfThreeAndFive) return 'FizzBuzz';
  if (isMultipleOfThree) return 'Fizz';
  if (isMultipleOfFive) return 'Buzz'
  return num.toString();
}

