import { Controller, Post, Inject, Body, Get } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { User } from './user/user.model';
import { Observable } from 'rxjs';
@Controller()
export class AppController {
 constructor(
   @Inject('MATH_SERVICE')
   private userService: ClientProxy,
   @Inject('STRING_SERVICE')
   private stringService: ClientProxy,
 ) {}

 @Get('user/all')
 get_all_user(@Body() { data }): Observable<Promise<User[]>> {
   console.log('request incoming')
   return this.userService.send({ cmd: 'user-all' }, data);
 }

 @Post('join')
 join(@Body() { data }):Observable<Promise<User[]>> {
   return this.stringService.send({ cmd: 'join' }, data);
 }
}