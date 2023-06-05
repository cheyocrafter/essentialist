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


# Upfront Design 

## FIND 
### Responsibilities 
#### Doings
- return statistics object for a sequence of integers
#### Knowings 
- it knows how to find the minimum value 
- it knows how to find the maximum value
- it knows how to count the number of elements in the sequence
- it knows how to calculate the average of the sequence


### Examples 
#### Example 1
```ts
// input 
[2, 4, 21, -8, 53, 40]
```

```ts
// output
{
  min: -8,
  max: 53,
  count: 6,
  average: 18.666666666667
}
```
#### Example 2
```ts
// input 
[1, 2, 3]
```

```ts
// output
{
  min: 1,
  max: 3,
  count: 3,
  average: 2
}
```

#### Example 3 
```ts
// input 
[117]
```

```ts
// output
{
  min: 117,
  max: 117,
  count: 1,
  average: 117
}
```

#### Example 4
```ts
// input 
[-38, -2, 7, -177, 48, 9]
```

```ts
// output
{
  min: -117,
  max: 48,
  count: 6,
  average: -25.5
}
```


## ARCH
### Systems Thinking (mental model)
- **input**: array of integers
- **output**: object with stat properties

### Program by wishful thinking 


### Clarify before you verify 
- Will model output as an object with properties and check the properties return the expected values
- Will write multiple expect statements to validate the properties one by one, instead of validating the return object result as a single unit.


## AUTOMATE
- Already overed. No need to do anything else.