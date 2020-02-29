import { BadRequestException, PipeTransform } from '@nestjs/common';
import _ from 'lodash';

export class ParseIDsPipe implements PipeTransform<string, number[]> {
  transform(value: string) {
    if (_.isEmpty(value)) {
      return [];
    }

    if (!_.isString(value)) {
      throw new BadRequestException('Invalid IDs');
    }

    const ids = _(value)
      .split(',')
      .map(_.unary(_.trim))
      .map(_.unary(parseInt))
      .value();

    if (!_.every(ids, _.isInteger)) {
      throw new BadRequestException('Invalid IDs');
    }

    return ids;
  }
}
