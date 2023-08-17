import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
export declare class ProductController {
    private readonly productService;
    constructor(productService: ProductService);
    create(response: any, body: CreateProductDto): Promise<CreateProductDto>;
    findAll(): Promise<Product[]>;
    findOne(id: string): Promise<Product>;
    update(id: number, updateData: Partial<Product>): Promise<Product>;
    delete(id: number): Promise<void>;
}
