import { BadRequestException, PipeTransform } from '@nestjs/common';
import _ from 'lodash';

export class ParseBoolPipe implements PipeTransform<string, boolean> {
  private options: IParseBoolPipeOptions;
  constructor(options?: IParseBoolPipeOptions) {
    this.options = _.defaults(options || {}, {
      optional: false,
    });
  }

  transform(value: string) {
    if (
      (value === null || value === undefined || value === '') &&
      this.options.optional
    ) {
      return undefined;
    }

    if (value === '0' || value === 'false') {
      return false;
    } else if (value === '1' || value === 'true') {
      return true;
    }

    throw new BadRequestException(
      `Validation failed ('0', 'false', '1', or 'true' expected)`,
    );
  }
}

export interface IParseBoolPipeOptions {
  optional?: boolean;
}
