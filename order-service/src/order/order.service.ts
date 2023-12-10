import { Model } from 'mongoose';
import {Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './order.model';

import { ObjectId }  from 'mongodb';


@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}
  

  async findAll(): Promise<Order[]> {
    return this.orderModel.find().exec();
  }

  create (
          user_id:String,
          product_id:string,
          quantity:number,
          totalAmount:number
  ): Promise<Order>{
    const order = new this.orderModel({user_id,product_id,quantity,totalAmount})      
    return order.save()
  }

  update(
    param:{
    
      user_id:String,
      product_id:string,
      quantity:number,
      totalAmount:number
    
      id:string
    }
  ){  
    const id = new ObjectId(param.id);
 
    return this.orderModel.updateOne({_id:id},
          {user_id:param.user_id,product_id:param.product_id,quantity:param.quantity,totalAmount:param.totalAmount})
  }

  delete(
    idInput:string
  ){  
    const id = new ObjectId(idInput);
 
    return this.orderModel.deleteOne({_id:id})
  }
}
