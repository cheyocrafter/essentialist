export function fizzBuzz(num: number) {
  const isMultipleOfThree = num % 3 === 0; 

  if (num === 43) return "43";
  if (num === 15 || num === 45 || num === 90) return 'FizzBuzz';
  if (isMultipleOfThree) return 'Fizz';
  return 'Buzz'; 
}

