export class PasswordValidator {
  validate(password: string): { isValid: boolean, errors: {type: string, message: string}[]} {
    const validationResult = {
      isValid: false,
      errors: [] as {type: string, message: string}[]
    };

    if (password.length < 5 || password.length > 15) {
      const error = {
        type: "PASSWORD_LENGTH_ERROR", 
        message: "password must be between 5 and 15 characters"
      }
      validationResult.errors.push(error)
    }

    return validationResult
  }
}