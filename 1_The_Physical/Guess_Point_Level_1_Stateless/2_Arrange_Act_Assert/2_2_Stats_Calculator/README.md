# Stats Calculator (#statsCalculator)

> Your task is to process a sequence of integer numbers to determine the following statistics:

> Without using system Math library functions, process a sequence of integers to determine the following statistics:

minimum value
maximum value
number of elements in the sequence
average value

> For example: [2, 4, 21, -8, 53, 40]

minimum value = -8
maximum value = 53
number of elements in the sequence = 6
average value = 18.666666666667

### Requirements 
- Process a sequence of integers numbers to determine:
  1. minimum value 
  2. maximum value 
  3. number of elements in the sequence 
  4. average value
  
- `NOTE`: Do NOT use system Math library functions

#### Separation of concerns (SoC)
- The return value from `StatsCalculator` should be numeric (e.g. -8, 53, 6, 18.666666666667).

#### Test Cases 
- detect `StatsCalculator` is defined
- it should find the `minimum` value from a sequence of integers 
- it should find the `maximum` value from a sequence of integers 
- it should be able to `count` the number items in the sequence
- it should be able to calculate the `average` of a sequence of numbers
  - returns the result calculated to `12 decimal places`




---
## Getting started

To set up the project, run the following command:

```bash
npm run install
```

## To run the tests in development mode

To run the tests and have them reload when you save, run the following command:

```bash
npm run test:dev
```