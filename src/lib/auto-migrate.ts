import { createConnection } from 'typeorm';

export async function autoMigrate() {
  const connection = await createConnection();
  await connection.runMigrations({
    transaction: 'all',
  });
  await connection.close();
}
