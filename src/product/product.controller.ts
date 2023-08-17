import { Controller, Get, Post, Put, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create(@Res() response, @Body() body: CreateProductDto) : Promise<CreateProductDto> {
    const newProduct = await this.productService.create(body)
    return response.status(HttpStatus.CREATED).json({newProduct})
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateData: Partial<Product>): Promise<Product> {
    return this.productService.update(id, updateData);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.productService.delete(id);
  }
}
