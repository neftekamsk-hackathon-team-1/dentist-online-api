import _ from 'lodash';
import moment from 'moment';
import { FindOperator, Raw } from 'typeorm';

/**
 * Custom TypeORM find operator
 */
export function BetweenDates(
  fromDate?: moment.MomentInput,
  toDate?: moment.MomentInput,
): FindOperator<any> {
  return Raw(alias => {
    let raw = '';

    const momentFromDate =
      fromDate && moment(fromDate).isValid() ? moment(fromDate) : undefined;

    const momentToDate =
      toDate && moment(toDate).isValid() ? moment(toDate) : undefined;

    if (momentFromDate) {
      raw += `${alias} > '${momentFromDate.toISOString()}'`;
    }

    if (momentFromDate && momentToDate) {
      raw += ' AND ';
    }

    if (momentToDate) {
      raw += `${alias} < '${momentToDate.toISOString()}'`;
    }

    return raw;
  });
}
