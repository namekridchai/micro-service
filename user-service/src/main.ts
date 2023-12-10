import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Transport, MicroserviceOptions } from '@nestjs/microservices';
const PORT = 3001;

async function bootstrap() {
 const app = await NestFactory.createMicroservice(
   AppModule,
   {
     transport: Transport.TCP,
     options: { port: PORT },
   },
 );
 await app.listen();
 console.log(`user service running at port ${PORT}`)
 
}
bootstrap();