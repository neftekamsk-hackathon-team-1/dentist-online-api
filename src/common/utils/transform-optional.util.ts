import _ from 'lodash';

export function TransformOptional(value: any): any {
  if (value === '' || value === null || value === undefined) {
    return undefined;
  }

  return value;
}
