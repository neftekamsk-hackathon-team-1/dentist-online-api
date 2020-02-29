import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class SpecialistsServices1582963988382 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'specialists_services',
        foreignKeys: [
          {
            columnNames: ['specialist_id'],
            referencedTableName: 'specialists',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            name: 'FK_specialists_services__specialist_id',
          },
          {
            columnNames: ['service_id'],
            referencedTableName: 'services',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
            name: 'FK_specialists_services__service_id',
          },
        ],
        indices: [
          {
            columnNames: ['specialist_id'],
            name: 'IX_specialists_services__specialist_id',
          },
          {
            columnNames: ['service_id'],
            name: 'IX_specialists_services__service_id',
          },
        ],
        columns: [
          {
            name: 'specialist_id',
            type: 'integer',
            isNullable: false,
            isPrimary: true,
          },
          {
            name: 'service_id',
            type: 'integer',
            isNullable: false,
            isPrimary: true,
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('specialists_services');
  }
}
