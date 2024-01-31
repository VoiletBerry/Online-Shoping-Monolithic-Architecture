export const STATUS_CODES = {
  OK: 200,
  BAD_REQUEST: 400,
  UN_AUTHORISED: 403,
  NOT_FOUND: 404,
  INTERNAL_ERROR: 500,
};

export class AppError extends Error {
  public name: string;
  public statusCode: number;
  public isOperational: boolean;
  public errorStack: any;
  public logError: any;

  constructor(name: string, statusCode: number, description: string, isOperational: boolean, errorStack?: any, logingErrorResponse?: any) {
    super(description);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.errorStack = errorStack;
    this.logError = logingErrorResponse;
    Error.captureStackTrace(this);
  }
}

export class APIError extends AppError {
  public name: string;
  public statusCode: number;
  public isOperational: boolean;
  public errorStack: any;
  public logError: any;

  constructor(name: string, statusCode: number = STATUS_CODES.INTERNAL_ERROR, description: string = "Internal Server Error", isOperational: boolean = true) {
    super(name, statusCode, description, isOperational);
    this.name = name;
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.errorStack = this.errorStack;
  }
}

export class BadRequestError extends AppError {
  constructor(description = "Bad request", logingErrorResponse: any) {
    super("NOT FOUND", STATUS_CODES.BAD_REQUEST, description, true, false, logingErrorResponse);
  }
}

export class ValidationError extends AppError {
  constructor(description = "Validation Error", errorStack: any) {
    super("BAD REQUEST", STATUS_CODES.BAD_REQUEST, description, true, errorStack);
  }
}
