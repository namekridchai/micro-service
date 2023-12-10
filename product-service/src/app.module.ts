import { Module } from '@nestjs/common';

import { productModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestUser'),
             productModule

]
})
export class AppModule {}
