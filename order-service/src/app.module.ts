import { Module } from '@nestjs/common';

import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestUser'),
             OrderModule

]
})
export class AppModule {}
