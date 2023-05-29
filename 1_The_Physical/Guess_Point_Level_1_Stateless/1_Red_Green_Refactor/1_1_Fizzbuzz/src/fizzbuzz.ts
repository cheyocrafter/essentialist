export function fizzBuzz(num: number) {
  const isMultipleOfThree = num % 3 === 0; 
  const isMultipleOfThreeAndFive = num % 3 === 0 && num % 5 == 0;


  if (isMultipleOfThreeAndFive) return 'FizzBuzz';
  if (isMultipleOfThree) return 'Fizz';
  if (!isMultipleOfThree || !(num % 5 === 0)) return num.toString()
  return 'Buzz';
}

