import { BadRequestException, PipeTransform } from '@nestjs/common';
import _ from 'lodash';
import moment from 'moment';

export class ParseDatePipe implements PipeTransform<any, Date> {
  transform(value: any) {
    if (!value) {
      return undefined;
    }

    if (!moment(value).isValid()) {
      throw new BadRequestException('Invalid date');
    }

    return moment(value).toDate();
  }
}
