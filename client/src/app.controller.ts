import { Controller, Post, Inject, Body, Get, Patch, Param, Delete } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Controller()
export class AppController {
 constructor(
   @Inject('USER_SERVICE')
   private userService: ClientProxy,
   @Inject('PRODUCT_SERVICE')
   private productService: ClientProxy,
 ) {}

 @Get('user')
 get_all_user() {
   console.log('request incoming')
   return this.userService.send({ cmd: 'user-all' },[]);
 }

 @Post('user')
  create_user(@Body() { data }) { 
   console.log(data)
   console.log('create user request incoming')
   return this.userService.send({ cmd: 'create-user' },data);
 }

 @Patch('user/:id')
 update_user(@Body() { data },
      @Param('id') id :String     
 ) {
  console.log({...data,id:id})
   return this.userService.send({ cmd: 'update-user' }, {...data,id:id});
 }

 @Delete('user/:id')
 delete_user(
      @Param('id') id :String     
 ) {
 
   return this.userService.send({ cmd: 'delete-user' }, id);
 }


 @Get('product')
 get_all_product() {
   console.log('request incoming')
   return this.productService.send({ cmd: 'product-all' },[]);
 }

 @Post('product')
  create_product(@Body() { data }) { 
   console.log(data)
   console.log('create product request incoming')
   return this.productService.send({ cmd: 'create-product' },data);
 }

 @Patch('product/:id')
 update_product(@Body() { data },
      @Param('id') id :String     
 ) {
  console.log({...data,id:id})
   return this.productService.send({ cmd: 'update-product' }, {...data,id:id});
 }

 @Delete('product/:id')
 delete_product(
      @Param('id') id :String     
 ) {
 
   return this.productService.send({ cmd: 'delete-product' }, id);
 }

}