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
}
