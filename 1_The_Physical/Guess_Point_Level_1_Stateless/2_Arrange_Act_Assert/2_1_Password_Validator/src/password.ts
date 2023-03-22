export interface IPassword {
  hasMinimumLength: () => boolean;
  hasMaximumLength: () => boolean;
  hasDigit: () => boolean;
  hasUpperCaseLetter: () => boolean;
}

export class Password implements IPassword {
  password: string;
  constructor(password: string) {
    this.password = password;
  }

  hasMinimumLength = (): boolean => {
    return this.password.length >= 5;
  }

  hasMaximumLength = (): boolean => {
    return this.password.length <= 15;
  }

  hasDigit = (): boolean => {
    return (/[0-9]/).test(this.password);
  }

  hasUpperCaseLetter = (): boolean => {
    return (/[A-Z]/).test(this.password);
  }
}