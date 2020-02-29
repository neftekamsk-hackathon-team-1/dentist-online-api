import {
  applyDecorators,
  ClassSerializerInterceptor,
  Controller,
  UseInterceptors,
  UsePipes,
} from '@nestjs/common';
import { createValidationPipe } from '../utils/create-validation-pipe.util';

export function AppController({
  prefix,
  auth = true,
  validationPipe = true,
}: AppControllerOptions) {
  const validationPipeDecorators = validationPipe
    ? [UsePipes(createValidationPipe())]
    : [];

  return applyDecorators(
    Controller(prefix),
    UseInterceptors(ClassSerializerInterceptor),
    ...validationPipeDecorators,
  );
}

export interface AppControllerOptions {
  prefix?: string;

  /**
   * @default true
   */
  auth?: boolean;

  /**
   * @default true
   */
  validationPipe?: boolean;
}
