import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
// ---------------------
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { getEnvPath } from './common/environments/helpers/environment.helper';
import { ProductsModule } from './products/products.module';
const envFilePath: string = getEnvPath(`${__dirname}/common/environments`);
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath, isGlobal: true }),
    MongooseModule.forRoot(
      `mongodb://${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`,
    ),
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
