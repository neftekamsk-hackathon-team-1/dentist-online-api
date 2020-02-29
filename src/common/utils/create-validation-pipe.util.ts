import { ValidationPipe } from '@nestjs/common';
import { makeError } from '../errors';

export function createValidationPipe(): ValidationPipe {
  return new ValidationPipe({
    transform: true,
    whitelist: true,
    exceptionFactory(errors) {
      return makeError('VALIDATION_ERROR', { validationErrors: errors });
    },
  });
}
