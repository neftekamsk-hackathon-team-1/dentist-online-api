import { applyDecorators } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptions } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt } from 'class-validator';
import _ from 'lodash';

export function ResourcePathIdParam(options?: ApiPropertyOptions) {
  return applyDecorators(ApiProperty(options), Type(type => Number), IsInt());
}
