import { ErrorType } from './errors-enum';
export interface IErrorItem {
  type: ErrorType; 
  message: string;
}
export interface IErrorsManager {
  errors: IErrorItem[];
  configErrorList: IErrorItem[];
  add: (errorType: ErrorType) => void;
  hasErrors: () => boolean;
  getErrors: () => IErrorItem[];
}

export class ErrorsManager implements IErrorsManager {
  errors: IErrorItem[];
  configErrorList: IErrorItem[]

  constructor(configList: IErrorItem[]) {
    this.configErrorList = configList;
    this.errors = [];
  }

  add = (errorType: ErrorType): void => {
    const foundError = this.configErrorList.find((error: IErrorItem) => {
      return error.type === errorType;
    })

    if (!foundError) {
      throw new Error("The error you're trying to add does not exist")
    }
    this.errors.push(foundError)
  }

  hasErrors = (): boolean => {
    return this.errors.length > 0;
  }

  getErrors = (): IErrorItem[] => {
    return this.errors;
  }
}