export interface PasswordValidationResult {
  isValid: boolean;
  errors: {type: string, message: string}[];
}

export class PasswordValidator {
  private isBetweenLengthConstraints(password: string) {
    return password.length < 5 || password.length > 15;
  }

  private hasDigit(password: string) {
    return (/[0-9]/).test(password);
  }

  private hasUpperCaseLetter(password: string) {
    return (/[A-Z]/).test(password);
  }

  validate(password: string): PasswordValidationResult {
    const validationResult = {
      isValid: true,
      errors: [] as {type: string, message: string}[]
    };

    if (this.isBetweenLengthConstraints(password)) {
      validationResult.errors.push({
        type: "PASSWORD_LENGTH_ERROR", 
        message: "password must be between 5 and 15 characters"
      })
    } 

    if (!this.hasDigit(password)) {
      validationResult.errors.push({
        type: "NO_DIGITS_ERROR",
        message: "password must contain at least 1 digit"
      })
    }

    if (!this.hasUpperCaseLetter(password)) { 
      validationResult.errors.push({
        type: "NO_UPPERCASE_LETTER_ERROR", 
        message: "password must contain at least one uppercase letter"
      });
    }

    if (validationResult.errors.length > 0) {
      validationResult.isValid = false; 
    }

    return validationResult;
  }
}