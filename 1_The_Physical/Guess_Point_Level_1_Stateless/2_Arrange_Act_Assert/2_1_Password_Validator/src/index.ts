import { IPassword } from "./password";

export interface ErrorItem {
  type: string; 
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ErrorItem[]
}

export interface IPasswordValidator {
  password: IPassword;
  validate: (password: string) => boolean;
  isValid: boolean;
  errors: ErrorItem[]
}

export class PasswordValidator {
  password: IPassword;
  isValid: boolean;
  errors: ErrorItem[];

  constructor(password: IPassword) {
    this.password = password;
    this.isValid = true;
    this.errors = []
  }

  validate(): ValidationResult {
    const validationResult = {
      isValid: true, 
      errors: [] as ErrorItem[]
    }

    if (!this.password.hasMinimumLength()) {
      validationResult.errors.push({
        type: 'MIN_LENGTH_ERROR',
        message: "A password must have a minimum length of 5 characters"
      })
    }

    if (!this.password.hasMaximumLength()) {
      validationResult.errors.push({
        type: 'MAX_LENGTH_ERROR',
        message: "A password must have a maximum length of 15 characters"
      });
    }

    if (!this.password.hasDigit()) {
      validationResult.errors.push({
        type: 'NO_DIGIT_ERROR',
        message: "A password must contain at least 1 digit"
      });
    }

    if (!this.password.hasUpperCaseLetter()) {
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