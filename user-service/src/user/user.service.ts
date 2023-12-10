import { Model } from 'mongoose';
import { Body, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.model';

import { ObjectId }  from 'mongodb';


@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  create (
          name:String,
          age:BigInteger,
          password:String,
  ): Promise<User>{
    const user = new this.userModel({name,age,password})      
    return user.save()
  }

  update(
    param:{
    
        name:String,
        age:BigInteger,
        password:String,
    
      id:string
    }
  ){  
    const id = new ObjectId(param.id);
 
    return this.userModel.updateOne({_id:id},{name:param.name,age:param.age,password:param.password})
  }

  delete(
    idInput:string
  ){  
    const id = new ObjectId(idInput);
 
    return this.userModel.deleteOne({_id:id})
  }
}
