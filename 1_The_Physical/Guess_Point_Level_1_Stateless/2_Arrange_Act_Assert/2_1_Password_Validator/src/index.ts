import { IPassword } from "./password";
import { IErrorItem } from "./error";

export interface ValidationResult {
  isValid: boolean;
  errors: IErrorItem[]
}

export interface IPasswordValidator {
  password: IPassword;
  validate: () => ValidationResult;
  isValid: boolean;
  errors: IErrorItem[]
}

export class PasswordValidator implements IPasswordValidator {
  password: IPassword;
  isValid: boolean;
  errors: IErrorItem[];

  constructor(password: IPassword) {
    this.password = password;
    this.isValid = true;
    this.errors = []
  }

  validate(): ValidationResult {
    if (!this.password.hasMinimumLength()) {
      this.errors.push({
        type: 'MIN_LENGTH_ERROR',
        message: "A password must have a minimum length of 5 characters"
      })
    }

    if (!this.password.hasMaximumLength()) {
      this.errors.push({
        type: 'MAX_LENGTH_ERROR',
        message: "A password must have a maximum length of 15 characters"
      });
    }

    if (!this.password.hasDigit()) {
      this.errors.push({
        type: 'NO_DIGIT_ERROR',
        message: "A password must contain at least 1 digit"
      });
    }

    if (!this.password.hasUpperCaseLetter()) {
      this.errors.push({
        type: 'NO_UPPERCASE_LETTER_ERROR',
        message: 'A password must contain at least 1 uppercase letter'
      });
    }

    if (this.errors.length !== 0) {
      this.isValid = false;
    }

    return {
      isValid: this.isValid,
      errors: this.errors
    };
  }
}