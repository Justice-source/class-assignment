import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  productService: any;

  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {} 
  create(product: Product): Promise<Product> {
    return this.productsRepository.save(product)
  }

  findAll() {
    return this.productsRepository.find()
  }

  async findOne(id): Promise<Product> {
    return await this.productsRepository.findOne({where: {id}})
  }

  async update(id: number, updateData: Partial<Product>): Promise<Product> {
    const product = await this.productsRepository.findOneBy({id});
    Object.assign(product, updateData); // Update product fields with the new data
    return this.productsRepository.save(product); // Save the updated product to the database
  }

  async delete(id: number): Promise<void> {
    const product = await this.productsRepository.findOneBy({id});
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    await this.productsRepository.remove(product);
    
  }
}
