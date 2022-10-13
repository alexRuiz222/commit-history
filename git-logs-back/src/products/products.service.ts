import { HttpStatus, Injectable } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { Product } from './schemas/product.shcema';
import { Response } from 'express';

@Injectable()
export class ProductsService {
    constructor(private readonly productsRepository: ProductsRepository) { }

    async getProductById(_id: string): Promise<Product> {
        return this.productsRepository.findOne({ _id, status: true });
    }

    async getProducts(query): Promise<Product[]> {
        const queries = query.search.length > 0 ? { name: { $regex: query.search, $options: 'ig' } } : {};
        return this.productsRepository.find({ status: true, ...queries });
    }

    async createProduct(product: Product, res: Response): Promise<Product> {
        // checking if product already exists
        if (await this.productExists(product.name)) {
            res.status(HttpStatus.FORBIDDEN).json({
                msg: 'Product already exists',
                msg_es: 'El producto ya existe'
            });
            return;
        }
        return this.productsRepository.create(product);
    }

    async updateProduct(_id: string, product: Product): Promise<Product> {
        return this.productsRepository.findOneAndUpdate({ _id }, product);
    }

    async deleteProduct(_id: string): Promise<Product> {
        return this.productsRepository.deleteOne({ _id });
    }

    async productExists(name: string): Promise<boolean> {
        const productFound = await this.productsRepository.findOne({ name });
        return !!productFound;
    }
}
