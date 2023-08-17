import { EntitySchema } from 'typeorm';
import { Product } from './product.entity';

export const ProductSchema = new EntitySchema<Product>({
  name: 'Product',
  target: Product,
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
  relations: {
    // users: {
    //   type: 'one-to-many',
    //   target: 'Photo', // the name of the PhotoSchema
    // },
  },
});