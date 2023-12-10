import { Controller, Post, Inject, Body, Get, Patch, Param, Delete } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';


@Controller()
export class AppController {
 constructor(
   @Inject('USER_SERVICE')
   private userService: ClientProxy,
   @Inject('PRODUCT_SERVICE')
   private productService: ClientProxy,
   @Inject('ORDER_SERVICE')
   private orderService: ClientProxy,
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

 @Get('order')
 get_all_order() {
   console.log('request incoming')
   return this.orderService.send({ cmd: 'order-all' },[]);
 }

 @Post('order')
  create_order(@Body() { data }) { 
   console.log(data)
   console.log('create order request incoming')
   return this.orderService.send({ cmd: 'create-order' },data);
 }

 @Patch('order/:id')
 update_order(@Body() { data },
      @Param('id') id :String     
 ) {
  console.log({...data,id:id})
   return this.orderService.send({ cmd: 'update-order' }, {...data,id:id});
 }

 @Delete('order/:id')
 delete_order(
      @Param('id') id :String     
 ) {
 
   return this.orderService.send({ cmd: 'delete-order' }, id);
 }

}