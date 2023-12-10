import { Controller, Get } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order} from './order.model';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class orderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern({ cmd: 'order-all' })
  getAll(): Promise<Order[]> {
    console.log('accept request')
    return this.orderService.findAll();
  }

  @MessagePattern({ cmd: 'create-order' })
  async create_order(
    data:{ user_id:String,
      product_id:string,
      quantity:number,
      totalAmount:number
  }
    
  ): Promise<Order> {
    const order = await this.orderService.create(data.user_id,data.product_id,data.quantity,data.totalAmount)
    return order
  }

  @MessagePattern({ cmd: 'update-order' })
  async update_order(
    param:{
         
      user_id:String,
      product_id:string,
      quantity:number,
      totalAmount:number
                  
            id:string
    }
  ) {
    const order = await this.orderService.update(param)
    return order
  }

  @MessagePattern({ cmd: 'delete-order' })
  async delete_order(
    id:string
  ) {
    const order = await this.orderService.delete(id)
    return order
  }

}
