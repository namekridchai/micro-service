import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { orderController } from './order.controller';
import { OrderService } from './order.service';
import { Order, OrderSchema } from './order.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }])],
  controllers: [orderController],
  providers: [OrderService],
})
export class OrderModule {}