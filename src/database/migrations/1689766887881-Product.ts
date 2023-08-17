import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class Product1689766887881 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
      new Table({
        name: 'product',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'desc',
            type: 'varchar',
            length: '255',
          },
         {
            name: 'price',
            type: 'int',
            length: '255',
          },
        ],
      }),
    );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropTable('product')
    }

}
