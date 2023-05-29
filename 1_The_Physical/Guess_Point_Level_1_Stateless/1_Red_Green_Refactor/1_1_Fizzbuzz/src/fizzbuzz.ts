export function fizzBuzz(num: number) {
  const isMultipleOfThree = num % 3 === 0; 
  const isMultipleOfFive = num % 5 === 0; 
  const isMultipleOfThreeAndFive = isMultipleOfThree && isMultipleOfFive;


  if (isMultipleOfThreeAndFive) return 'FizzBuzz';
  if (isMultipleOfThree) return 'Fizz';
  if (isMultipleOfFive) return 'Buzz'
  return num.toString();
}

