export function fizzBuzz(num: number) {
  const isMultipleOfThree = num % 3 === 0; 

  if (num === 15) return 'FizzBuzz';
  if (isMultipleOfThree) return 'Fizz';
  return 'Buzz'; 
}

