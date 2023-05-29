export function fizzBuzz(num: number) {
  const isMultipleOfThree = num % 3 === 0; 
  const isMultipleOfThreeAndFive = num % 3 === 0 && num % 5 == 0;


  if (isMultipleOfThreeAndFive) return 'FizzBuzz';
  if (isMultipleOfThree) return 'Fizz';
  if (num % 5 === 0) return 'Buzz'
  return num.toString();
}

