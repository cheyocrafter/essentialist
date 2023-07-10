
# Password validator (#passwordValidator)

> Write a function (or a class) for validating passwords. Passwords must meet the following criteria: 

> Between 5 and 15 characters long
> Contains at least one digit
> Contains at least one upper case letter
> Return an object containing a boolean result and an errors key that — when provided with an invalid password — contains an error message or type for all errors in occurrence. There can be multiple errors at a single time.

## Upfront Design
### **Responsibilities**
### Doings
- validate password 
### Knowings
- it knows a password between 5 and 15 characters log is valid 
- it knows a password must contain at least one digit (0-9)
- it knows a password must contain at least one upper case letter (A-Z)


### Input
- a string composed of UTF-8 characters can include letters, numbers and symbols

### Output
- it returns an object containing: 
  - a boolean result (true if valid, false if not valid)
  - errors key
    - when provided with an invalid password it contains an error message or a type for all error occurrences 
    - There can be multiple errors in a single line 


#### Examples 
## Valid Password 
Password length is between range (5-15 characters), it contains at least 1 digit, and it contains at least 1 uppercase letter.

```js
// input: 15 characters long 
Passw4rd8H2vB72 
```
```js
// input: 6 characters long
Passw4
```

```js
// output
{
  isValid: true,
  errors: []
}
```

## Invalid Length

```js
// input
Pass4rdisT0000000000000000long
```
```js
// input
Pa4r
```

```js
// output
{
  isValid: false,
  errors: [
    { type: 'INVALID_LENTH_ERROR' }
  ]
}
```

## Invalid length and no uppercase letters
```js
// input 
asx6
```
```js
// input 
asx387484945939383779530376
```

```js
// output 
{
  isValid: false,
  errors: [
    { type: 'INVALID_LENGTH_ERROR' },
    { type: 'NO_UPPERCASE_LETTER_ERROR' },
  ]
}
```

## Invalid length, no uppercase letter, and no digit

```js
// input
okkkdjfkalsdlkajlsdkfjlaksdjlfkjl
```
```js
// input
aaaa
```

```js
// output
{
  isValid: false,
  errors: [
    { type: 'INVALID_LENGTH_ERROR' },
    { type: 'NO_UPPERCASE_LETTER_ERROR' },
    { type: 'NO_DIGIT_ERROR' },
  ]
}
```


