import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Specialists1582963975847 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'specialists',
        columns: [
          {
            name: 'id',
            isGenerated: true,
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'created_at',
            type: 'timestamp without time zone',
            isNullable: false,
            default: 'NOW()',
          },
          {
            name: 'updated_at',
            type: 'timestamp without time zone',
            isNullable: false,
            default: 'NOW()',
          },
          {
            name: 'full_name',
            type: 'varchar',
            isNullable: false,
            default: "''",
          },
          {
            name: 'about',
            type: 'text',
            isNullable: false,
            default: "''",
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('specialists');
  }
}
