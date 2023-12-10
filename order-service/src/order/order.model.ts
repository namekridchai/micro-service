import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  user_id: string;

  @Prop()
  product_id: string;

  @Prop()
  quantity: number;

  @Prop()
  totalAmount: number;
}

export const OrderSchema = SchemaFactory.createForClass(Order);