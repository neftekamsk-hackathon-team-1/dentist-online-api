import { BadRequestException, PipeTransform } from '@nestjs/common';
import _ from 'lodash';

export class ParseLoadsPipe implements PipeTransform<string, string[]> {
  constructor(private readonly advancedFields: string[]) {}

  transform(value: string) {
    if (_.isEmpty(value)) {
      return [];
    }

    if (!_.isString(value)) {
      throw new BadRequestException('Invalid value for "load" parameter');
    }

    const loads = _(value)
      .split(',')
      .map(_.unary(_.trim))
      .uniq()
      .value();

    const diff = _.difference(loads, this.advancedFields);

    if (diff.length > 0) {
      throw new BadRequestException(
        `Unknown values for "load" parameter: ${diff.join(',')}`,
      );
    }

    return loads;
  }
}
