# Military Time Validator (#militaryTimeValidator)

> Write a class (or a function) capable of validating whether a string time range is a valid military time range or not.

> Here are some string examples.

- "01:12 - 14:32" (yes)
- "25:00 - 12:23" (no)
- "22:00 - 23:12" (yes)

## Requirements 
- should be defined 
- given no values it should return false 
- format should be valid e.g. [hh:ss - hh:ss]
  - "01:12 - 14:32" (yes)
  - "25:00 - 12:23" (no) <--- starting time is invalid it can only be 00 - 23
  - "01:12-14:32"  (no)
  - "01:12- 14:32" (no)
  - "01:12 -14:32" (no)
  - "01:12  14:32" (no)
- start time should be valid
  - test: end time cannot be smaller than start time 
    - e.g. 23:58 - 23:45 <----- this is invalid!
- end time should be valid
  - test: 23:33 - 23:58 <----- this is valid because end time is greater or equal to 
  - test: 23:33 - 23:33 <----- this is also valid 

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