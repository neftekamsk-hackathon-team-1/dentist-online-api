import { HttpException, HttpStatus } from '@nestjs/common';

export const errors = {
  INN_ALREADY_USED: HttpStatus.CONFLICT,
  KPP_ALREADY_USED: HttpStatus.CONFLICT,
  LOGIN_ALREADY_USED: HttpStatus.CONFLICT,
  EMAIL_ALREADY_USED: HttpStatus.CONFLICT,
  EMAIL_SEND_ERROR: HttpStatus.INTERNAL_SERVER_ERROR,
  USER_BLOCKED: 423,
  USER_NOT_FOUND: HttpStatus.NOT_FOUND,
  WRONG_LOGIN_OR_PASSWORD: HttpStatus.UNAUTHORIZED,

  PASSWORD_RESET_NOT_FOUND: HttpStatus.NOT_FOUND,
  PASSWORD_RESET_WRONG_CODE: HttpStatus.BAD_REQUEST,
  PASSWORD_RESET_ALREADY_SUCCEED: HttpStatus.BAD_REQUEST,
  OLD_PASSWORD_REQUIRED: HttpStatus.BAD_REQUEST,

  EMAIL_ALREADY_CONFIRMED: HttpStatus.BAD_REQUEST,

  CUSTOMER_NOT_FOUND: HttpStatus.NOT_FOUND,

  TARIFF_NOT_FOUND: HttpStatus.NOT_FOUND,

  ACCOUNT_NOT_FOUND: HttpStatus.NOT_FOUND,
  CAN_NOT_DELETE_BASE_ACCOUNT: HttpStatus.FORBIDDEN,
  CAN_NOT_BLOCK_BASE_ACCOUNT: HttpStatus.FORBIDDEN,

  CAN_NOT_BLOCK_YOURSELF: HttpStatus.CONFLICT,

  NOT_ENOUGH_MONEY: HttpStatus.PAYMENT_REQUIRED,

  CAN_NOT_EDIT_MONEY: HttpStatus.FORBIDDEN,

  CAN_NOT_REMOVE_LAST_CUSTOMER_ADMIN: HttpStatus.CONFLICT,

  VALIDATION_ERROR: HttpStatus.BAD_REQUEST,

  NOT_IMPLEMENTED: HttpStatus.NOT_IMPLEMENTED,

  PAYMENT_NOT_FOUND: HttpStatus.NOT_FOUND,
  PAYMENT_WITHOUT_CONTRACT: HttpStatus.CONFLICT,
  PAYMENT_CONTRACT_ALREADY_SUCCEED: HttpStatus.CONFLICT,

  EMAIL_CONFIRMATION_NOT_FOUND: HttpStatus.NOT_FOUND,
  EMAIL_CONFIRMATION_CONFLICT: HttpStatus.CONFLICT,
  EMAIL_CONFIRMATION_WRONG_CODE: HttpStatus.FORBIDDEN,

  /**
   * Avoid using this one. Use/create more detailed error codes instead
   * for example ACCOUNT_NOT_FOUND or USER_NOT_FOUND
   */
  NOT_FOUND: HttpStatus.NOT_FOUND,

  NOT_ENOUGH_FUEL: HttpStatus.BAD_REQUEST,

  UNAUTHORIZED: HttpStatus.UNAUTHORIZED,
};

export type ErrorCode = keyof typeof errors;

export const makeError = (code: ErrorCode, additional: object = {}) => {
  const status = errors[code];

  const err = new HttpException(
    {
      statusCode: status,
      code,
      ...additional,
    },
    status,
  );

  return err;
};
