import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/product.shcema';
import { Model, FilterQuery } from 'mongoose';

@Injectable()
export class ProductsRepository {
    constructor(@InjectModel(Product.name) public productModel: Model<ProductDocument>) { }

    async findOne(productFilterQuery: FilterQuery<Product>): Promise<Product> {
        return this.productModel.findOne(productFilterQuery);
    }

    async find(productFilterQuery: FilterQuery<Product>): Promise<Product[]> {
        return this.productModel.find(productFilterQuery);
    }

    async create(product: Product): Promise<Product> {
        const createdProduct = new this.productModel(product);
        return createdProduct.save();
    }

    async findOneAndUpdate(productFilterQuery: FilterQuery<Product>, product: Product): Promise<Product> {
        return this.productModel.findOneAndUpdate(productFilterQuery, product, { new: true });
    }

    async deleteOne(productFilterQuery: FilterQuery<Product>): Promise<Product> {
        return this.productModel.findOneAndUpdate(productFilterQuery, { status: false }, { new: true });
    }
}
