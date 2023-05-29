export function fizzBuzz(num: number) {
  if (num > 100) {
    throw new Error("Number argument should not exceed 100");
  }

  if (num < 1) {
    throw new Error("Number argument should be between 1 and 100");
  }

  const isMultipleOfThree = num % 3 === 0; 
  const isMultipleOfFive = num % 5 === 0; 
  const isMultipleOfThreeAndFive = isMultipleOfThree && isMultipleOfFive;

  if (isMultipleOfThreeAndFive) return 'FizzBuzz';
  if (isMultipleOfThree) return 'Fizz';
  if (isMultipleOfFive) return 'Buzz'
  return num.toString();
}

