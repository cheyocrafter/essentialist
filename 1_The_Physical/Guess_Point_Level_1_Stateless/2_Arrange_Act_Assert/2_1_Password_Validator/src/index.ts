export class PasswordValidator {
  static validate(password: string) {
    let errors = [];

    if (!(password.length >= 5 && password.length <= 15)) {
      errors.push({ type: 'INVALID_LENGTH_ERROR' });
    }

    return {
      isValid: errors.length === 0,
      errors: errors, 
    }
  }
}