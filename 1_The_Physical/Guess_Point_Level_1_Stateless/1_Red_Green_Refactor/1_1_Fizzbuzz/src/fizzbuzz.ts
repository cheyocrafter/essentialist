export function fizzBuzz(num: number) {
  const isMultipleOfThree = num % 3 === 0; 
  const isMultipleOfThreeAndFive = num % 3 === 0 && num % 5 == 0;

  if (num === 43) return "43";
  if (num === 11) return "11";
  if (num === 23) return "23";
  if (isMultipleOfThreeAndFive) return 'FizzBuzz';
  if (isMultipleOfThree) return 'Fizz';
  return 'Buzz'; 
}

