import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.model';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'user-all' })
  getAll(): Promise<User[]> {
    console.log('accept request')
    return this.userService.findAll();
  }

  @MessagePattern({ cmd: 'create-user' })
  async create_user(
    data:{name:String,
      age:BigInteger,
      password:String,
  }
    
  ): Promise<User> {
    const user = await this.userService.create(data.name,data.age,data.password)
    return user
  }

  @MessagePattern({ cmd: 'update-user' })
  async update_user(
    param:{
         
                    name:String,
                    age:BigInteger,
                    password:String,
                  
            id:string
    }
  ) {
    const user = await this.userService.update(param)
    return user
  }

  @MessagePattern({ cmd: 'delete-user' })
  async delete_user(
    id:string
  ) {
    const user = await this.userService.delete(id)
    return user
  }

}
