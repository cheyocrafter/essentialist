export interface ErrorItem {
  type: string; 
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ErrorItem[]
}

export class PasswordValidator {
  validate(password: string): ValidationResult {
    const validationResult = {
      isValid: true, 
      errors: [] as ErrorItem[]
    }

    if (password.length < 5) {
      validationResult.errors.push({
        type: 'MIN_LENGTH_ERROR',
        message: "A password must have a minimum length of 5 characters"
      })
    }

    if (password.length > 15) {
      validationResult.errors.push({
        type: 'MAX_LENGTH_ERROR',
        message: "A password must have a maximum length of 15 characters"
      });
    }

    if (!(/[0-9]/g).test(password)) {
      validationResult.errors.push({
        type: 'NO_DIGIT_ERROR',
        message: "A password must contain at least 1 digit"
      });
    }

    if (!(/[A-Z]/).test(password)) {
      validationResult.errors.push({
        type: 'NO_UPPERCASE_LETTER_ERROR',
        message: 'A password must contain at least 1 uppercase letter'
      });
    }

    if (validationResult.errors.length !== 0) {
      validationResult.isValid = false;
    }

    return validationResult;
  }
}