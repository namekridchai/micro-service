import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { productController } from './product.controller';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './product.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [productController],
  providers: [ProductService],
})
export class productModule {}