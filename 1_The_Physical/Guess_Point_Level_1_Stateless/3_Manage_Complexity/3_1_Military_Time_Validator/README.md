# Military Time Validator (#militaryTimeValidator)

> Write a class (or a function) capable of validating whether a string time range is a valid military time range or not.

> Here are some string examples.

- "01:12 - 14:32" (yes)
- "25:00 - 12:23" (no)
- "22:00 - 23:12" (yes)

### Understanding Military Time 
**Military time**, also known as the 24-hour clock, is a timekeeping system in which the day is divided into *24 hours*, numbered from `00:00 (midnight)` to `23:59`. In military time, each hour is represented by a `two-digit` number from `00` to `23`.

The hours from `00:00` to `11:59` are the same as in the standard 12-hour clock system, but in military time, they are simply written as `00:00` to `11:59`.

From `12:00` noon until `23:59`, the military time adds `12` to the standard 12-hour clock system, so *12:00 noon* becomes `12:00` in military time, and *11:00 PM* becomes `23:00` in military time.

Military time is often used in situations where clarity and precision are essential, such as in the military, aviation, and medical professions.

### Validation
#### Valid 
- Valid hours go from `00` to `23`
- Valid minutes go from `00` to `59` 
  
#### Invalid 
- Hours less than `00` are invalid 
- Hours greater than `23` are invalid 
- Minutes less than `00` are invalid 
- Minutes greater than `59` are invalid

### String processing 
We'll need to break the string time range by the `" - "` delimiter to get a list of times.
  
**Example**
- input: `"01:12 - 14:32"`
- output: `["01:12", "14:32"]`

We'll need to break the individual time strings by the `":"` delimiter to get the individual *hours* and *minutes*.

**Example**
- input: `"02:12"`
- output: `[2, 12]`  

### Notes 
> Numbers that have a leading `0` in javascript are converted to octal. Parse them using the `parseInt` function. e.g. `parseInt('010', 10)` returns `10` and `parseInt(02, 10)` returns `2`.



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