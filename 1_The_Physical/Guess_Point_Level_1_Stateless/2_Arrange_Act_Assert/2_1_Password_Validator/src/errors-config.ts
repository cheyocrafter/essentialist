import { ErrorType } from "./errors-enum";

export const errorsConfigList = [
  {
    type: ErrorType.INVALID_LENGTH_ERROR,
    message: "A password must be between 5 and 15 characters"
  },
  {
    type: ErrorType.NO_DIGIT_ERROR,
    message: "A password must contain at least 1 digit"
  },
  {
    type: ErrorType.NO_UPPERCASE_LETTER_ERROR,
    message: 'A password must contain at least 1 uppercase letter'
  }
];