# Military Time Validator (#militaryTimeValidator)

> Write a class (or a function) capable of validating whether a string time range is a valid military time range or not.

> Here are some string examples.

- "01:12 - 14:32" (yes)
- "25:00 - 12:23" (no)
- "22:00 - 23:12" (yes)

# Upfront Design 
## Find 
### Responsibilities 
#### Doings 
- validates a military time range string
#### Knowings 
- it knows that a military time range is valid when: 
  - the `start time` is greater than the `end time`
  - it is well formatted: the `start time` and the `end time` are separated by a `' - '` string
- it knows that a military time range is invalid when: 
  - the `end time` is greater than the `start time`
  - any other type of formatting that does not follow the pattern `<[0-23]>:<0-59> - <[0-23]>:<[0-59]>`
### Examples 
#### Valid time range (yes)
Example 1
```js
// input 
"01:12 - 14:32"
```

```js
// ouptut 
true 
```

Example 2
```js
// input 
"22:00 - 23:12"
```
```js
true
```

#### Invalid time range 2 (no)
Example 3
```js
// input 
"25:00 - 12:23"
```

```js
// output
false 
```

