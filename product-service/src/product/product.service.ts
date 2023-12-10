import { Model } from 'mongoose';
import {Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';

import { ObjectId }  from 'mongodb';


@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}
  

  async findAll(): Promise<Product[]> {
    return this.productModel.find().exec();
  }

  create (
          name:String,
          price:number,
          quantity:number,
  ): Promise<Product>{
    const product = new this.productModel({name,price,quantity})      
    return product.save()
  }

  update(
    param:{
    
        name:String,
        price:number,
        quantity:number,
    
      id:string
    }
  ){  
    const id = new ObjectId(param.id);
 
    return this.productModel.updateOne({_id:id},{name:param.name,price:param.price,quantity:param.quantity})
  }

  delete(
    idInput:string
  ){  
    const id = new ObjectId(idInput);
 
    return this.productModel.deleteOne({_id:id})
  }
}
