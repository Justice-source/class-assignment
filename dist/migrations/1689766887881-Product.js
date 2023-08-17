"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product1689766887881 = void 0;
const typeorm_1 = require("typeorm");
class Product1689766887881 {
    async up(queryRunner) {
        await queryRunner.createTable(new typeorm_1.Table({
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
        }));
    }
    async down(queryRunner) {
        await queryRunner.dropTable('product');
    }
}
exports.Product1689766887881 = Product1689766887881;
//# sourceMappingURL=1689766887881-Product.js.map