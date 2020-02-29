import { BadRequestException, PipeTransform } from '@nestjs/common';
import * as _ from 'lodash';
import { Order } from '../../constants/Order.enum';

export class ParseOrderPipe
  implements PipeTransform<string, Order | undefined> {
  transform(value: string) {
    if (!value) {
      return undefined;
    }

    if (_.isString(value)) {
      if (value.toLowerCase() === 'desc') {
        return Order.DESC;
      } else if (value.toLowerCase() === 'asc') {
        return Order.ASC;
      }
    }

    throw new BadRequestException(`Invalid order`);
  }
}
