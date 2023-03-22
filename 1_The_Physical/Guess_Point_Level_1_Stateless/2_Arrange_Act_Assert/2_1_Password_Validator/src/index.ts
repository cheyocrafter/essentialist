export class PasswordValidator {
  validate(password: string) {
    return {
      isValid: true, 
      errors: []
    }
  }
}