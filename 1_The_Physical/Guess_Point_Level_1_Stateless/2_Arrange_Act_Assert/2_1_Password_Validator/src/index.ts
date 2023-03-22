export class PasswordValidator {
  validate(password: string) {
    const validationResult = {
      isValid: true, 
      errors: [] as {type: string, message: string}[]
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

    if (validationResult.errors.length !== 0) {
      validationResult.isValid = false;
    }

    return validationResult;
  }
}