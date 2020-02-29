export function concatColumns(columns: string[], alias: string): string {
  let sql = '(';

  sql += columns
    .map(column => `COALESCE(${alias ? alias + '.' : ''}${column}, '')`)
    .join(` || ' ' || `);

  sql += ')';

  return sql;
}
