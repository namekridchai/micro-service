import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';
import { MessagePattern } from '@nestjs/microservices';
@Controller()
export class productController {
  constructor(private readonly productService: ProductService) {}

  @MessagePattern({ cmd: 'product-all' })
  getAll(): Promise<Product[]> {
    console.log('accept request')
    return this.productService.findAll();
  }

  @MessagePattern({ cmd: 'create-product' })
  async create_product(
    data:{name:String,
      price:number,
      quantity:number,
  }
    
  ): Promise<Product> {
    const product = await this.productService.create(data.name,data.price,data.quantity)
    return product
  }

  @MessagePattern({ cmd: 'update-product' })
  async update_product(
    param:{
         
                    name:String,
                    price:number,
                    quantity:number,
                  
            id:string
    }
  ) {
    const product = await this.productService.update(param)
    return product
  }

  @MessagePattern({ cmd: 'delete-product' })
  async delete_product(
    id:string
  ) {
    const product = await this.productService.delete(id)
    return product
  }

}
