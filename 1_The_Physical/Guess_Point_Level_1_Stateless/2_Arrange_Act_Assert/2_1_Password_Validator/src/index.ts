export class PasswordValidator {
  static validate(password: string) {
    let errors = [];

    if (!(password.length >= 5 && password.length <= 15)) {
      errors.push({ type: 'INVALID_LENGTH_ERROR' });
    }

    if (!(/[0-9]/g).test(password)) {
      errors.push({ type: 'NO_DIGIT_ERROR' })
    }

    if (!(/[A-Z]/g).test(password)) {
      errors.push({ type: 'NO_UPPERCASE_LETTER_ERROR' });
    }

    return {
      isValid: errors.length === 0,
      errors: errors, 
    }
  }
}