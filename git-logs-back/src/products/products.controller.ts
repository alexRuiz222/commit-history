import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';
import { ProductsService } from './products.service';
import { Product } from './schemas/product.shcema';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService, private readonly productsRepository: ProductsRepository) { }

    @Get(':id')
    async getProduct(@Param('id') id: string): Promise<Product> {
        return this.productsService.getProductById(id);
    }

    @Get()
    async getProducts(@Query() query: any): Promise<Product[]> {
        return this.productsService.getProducts(query);
    }

    @Post()
    async createProduct(@Body() product: CreateProductDto, @Res() response: Response): Promise<Product> {
        response.status(HttpStatus.CREATED).json(await this.productsService.createProduct(product, response));
        return;
    }

    @Patch(':id')
    async updateProduct(@Param('id') id: string, @Body() product: UpdateProductDto): Promise<Product> {
        return this.productsService.updateProduct(id, product);
    }

    @Delete(':id')
    async deleteProduct(@Param('id') id: string): Promise<Product> {
        return this.productsService.deleteProduct(id);
    }
}
