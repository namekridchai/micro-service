import { Controller, Post, Inject, Body, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

import { Observable } from 'rxjs';
@Controller()
export class AppController {
 constructor(
   @Inject('USER_SERVICE')
   private userService: ClientProxy,
   @Inject('STRING_SERVICE')
   private stringService: ClientProxy,
 ) {}

 @Get('user/all')
 get_all_user() {
   console.log('request incoming')
   return this.userService.send({ cmd: 'user-all' },1);
 }

 @Post('join')
 join(@Body() { data }) {
   return this.stringService.send({ cmd: 'join' }, data);
 }
}