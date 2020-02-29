import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Appointments1582967805857 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        foreignKeys: [
          {
            columnNames: ['specialist_id'],
            referencedTableName: 'specialists',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            name: 'FK_appointments__specialist_id',
          },
          {
            columnNames: ['service_id'],
            referencedTableName: 'services',
            referencedColumnNames: ['id'],
            onDelete: 'SET NULL',
            name: 'FK_appointments__service_id',
          },
        ],
        indices: [
          {
            columnNames: ['specialist_id'],
            name: 'IX_appointments__specialist_id',
          },
          {
            columnNames: ['service_id'],
            name: 'IX_appointments__service_id',
          },
        ],
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
            name: 'date',
            type: 'timestamp without time zone',
            isNullable: true,
          },
          {
            name: 'phone',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'specialist_id',
            type: 'integer',
            isNullable: true,
          },
          {
            name: 'service_id',
            type: 'integer',
            isNullable: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('appointments');
  }
}
