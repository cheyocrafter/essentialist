export interface IPassword {
  hasValidLength: () => boolean;
  hasDigit: () => boolean;
  hasUpperCaseLetter: () => boolean;
}

export class Password implements IPassword {
  password: string;
  constructor(password: string) {
    this.password = password;
  }

  hasValidLength = (): boolean => {
    return this.password.length >= 5 && this.password.length <= 15;
  }

  hasDigit = (): boolean => {
    return (/[0-9]/).test(this.password);
  }

  hasUpperCaseLetter = (): boolean => {
    return (/[A-Z]/).test(this.password);
  }
}