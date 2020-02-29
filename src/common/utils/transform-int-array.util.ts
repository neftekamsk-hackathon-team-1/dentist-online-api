import _ from 'lodash';
import { TransformInt } from './transform-int.util';

export function TransformIntArray(value: any): number[] {
  if (_.isArray(value)) {
    return value.map(TransformInt);
  } else {
    return value;
  }
}
