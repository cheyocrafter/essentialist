# Password validator (#passwordValidator)

> Write a function (or a class) for validating passwords. Passwords must meet the following criteria: 

> Between 5 and 15 characters long
> Contains at least one digit
> Contains at least one upper case letter
> Return an object containing a boolean result and an errors key that — when provided with an invalid password — contains an error message or type for all errors in occurrence. There can be multiple errors at a single time.

## Requirements 
### Concerns 
- Password Validation 
- Error Message Generation 

### Password Validation Requirements
1. password validator tests should be implemented using the Arrange-Action-Assert testing methodology
2. Should be a class 
3. password should have a length between 5 and 15 characters
4. password should contain at least 1 digit 
5. password should contain at least one uppercase letter
6. password validator should return a boolean result and an array of error when provided with an invalid password (there can be multiple errors at a single time)   


### Error Message Generation Requirements (Errors Manager)
1. errors manager must be a class that manages error configuration, tracking, and generation
2. must track errors when a password is invalid
3. error items should contain the error "type" and an error "message"
4. should provide an API to check if errors have occurred 
5. must accept an initial configuration list with all error items 
6. should return a list of all errors that have occurred 


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