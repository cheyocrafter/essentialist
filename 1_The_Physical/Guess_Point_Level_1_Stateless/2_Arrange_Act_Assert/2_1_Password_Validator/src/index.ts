import { IPassword } from "./password";
import { IErrorItem, IErrorsManager } from "./errors-manager";
import { ErrorType } from "./errors-enum";

export interface ValidationResult {
  isValid: boolean;
  errors: IErrorItem[]
}

export interface IPasswordValidator {
  validate: () => ValidationResult;
}

export class PasswordValidator implements IPasswordValidator {
  constructor(
    private password: IPassword,
    private errorsManager: IErrorsManager
  ) {}

  validate(): ValidationResult {
    if (!this.password.hasValidLength()) {
      this.errorsManager.add(ErrorType.INVALID_LENGTH_ERROR)
    }

    if (!this.password.hasDigit()) {
      this.errorsManager.add(ErrorType.NO_DIGIT_ERROR)
    }

    if (!this.password.hasUpperCaseLetter()) {
      this.errorsManager.add(ErrorType.NO_UPPERCASE_LETTER_ERROR)
    }

    return {
      isValid: !this.errorsManager.hasErrors(),
      errors: this.errorsManager.getErrors()
    };
  }
}