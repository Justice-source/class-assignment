import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
export declare class ProductService {
    private productsRepository;
    productService: any;
    constructor(productsRepository: Repository<Product>);
    create(product: Product): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: any): Promise<Product>;
    update(id: number, updateData: Partial<Product>): Promise<Product>;
    delete(id: number): Promise<void>;
}
