import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { ProductsRepository } from './products.repository';
import { ProductsModule } from './products.module';

describe('ProductsService', () => {
  let service: ProductsService;
  let app: INestApplication;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsService, ProductsRepository],
      imports: [ProductsModule],
    }).compile();

    app = module.createNestApplication();
    await app.init();
    service = module.get<ProductsService>(ProductsService);
  });

  // it('/products (GET)', () => {
  //   return request(app.getHttpServer())
  //     .get('/products')
  //     .expect(200)
  //     ;
  // });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });


});
