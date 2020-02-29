import { BadRequestException, PipeTransform } from '@nestjs/common';

export class ParseIntOptionalPipe implements PipeTransform<string, number> {
  transform(value: string) {
    if (value === undefined || value === null || value === '') {
      return undefined;
    }

    const isNumeric =
      ['string', 'number'].includes(typeof value) &&
      !isNaN(parseFloat(value)) &&
      isFinite(value as any);
    if (!isNumeric) {
      throw new BadRequestException(
        'Validation failed (numeric string is expected)',
      );
    }

    return parseInt(value, 10);
  }
}
