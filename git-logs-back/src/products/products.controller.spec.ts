import { Test, TestingModule } from '@nestjs/testing';
import { ProductsController } from './products.controller';
import { ProductsModule } from './products.module';
import { ProductsRepository } from './products.repository';
import { ProductsService } from './products.service';

describe('ProductsController', () => {
    let productsController: ProductsController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [ProductsController],
            providers: [ProductsService, ProductsRepository],
            imports: [ProductsModule],
        }).compile();

        productsController = app.get<ProductsController>(ProductsController);
    });

    describe('root', () => {
        it('should return "Hello World!"', () => {
            //   expect(ProductsController.getProducts()).toBe('Hello World!');
        });
    });
});
