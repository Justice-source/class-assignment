"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductSchema = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
exports.ProductSchema = new typeorm_1.EntitySchema({
    name: 'Product',
    target: product_entity_1.Product,
    columns: {
        id: {
            type: Number,
            primary: true,
            generated: true,
        },
        name: {
            type: String,
        },
        desc: {
            type: String,
        },
        price: {
            type: Number
        },
    },
    relations: {},
});
//# sourceMappingURL=product.schema.js.map