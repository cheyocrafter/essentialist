export interface PasswordValidationResult {
  isValid: boolean, 
  errors: {type: string, message: string}[]
}

export class PasswordValidator {
  isBetweenLengthConstraints(password: string) {
    return password.length < 5 || password.length > 15
  }

  validate(password: string): PasswordValidationResult {
    const validationResult = {
      isValid: true,
      errors: [] as {type: string, message: string}[]
    };

    if (this.isBetweenLengthConstraints(password)) {
      const error = {
        type: "PASSWORD_LENGTH_ERROR", 
        message: "password must be between 5 and 15 characters"
      }
      
      validationResult.isValid = false;
      validationResult.errors.push(error)
    } 

    if (!(/[0-9]/).test(password)) {
      const error = {
        type: "NO_DIGITS_ERROR",
        message: "password must contain at least 1 digit"
      } 
      validationResult.isValid = false;
      validationResult.errors.push(error)
    }

    if (!(/[A-Z]/).test(password)) {
      const error = {
        type: "NO_UPPERCASE_LETTER_ERROR", 
        message: "password must contain at least one uppercase letter"
      }; 

      validationResult.isValid = false; 
      validationResult.errors.push(error);
    }

    return validationResult
  }
}