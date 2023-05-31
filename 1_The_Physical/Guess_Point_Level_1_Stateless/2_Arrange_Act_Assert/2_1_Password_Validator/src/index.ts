export class PasswordValidator {
  static validate(password: string) {
    return {
      isValid: true, 
      errors: []
    }
  }
}