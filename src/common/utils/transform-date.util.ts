import _ from 'lodash';

export function TransformDate(value: any): Date {
  if (value === '' || value === null || value === undefined) {
    return undefined;
  }

  const date = new Date(value);

  return date;
}
