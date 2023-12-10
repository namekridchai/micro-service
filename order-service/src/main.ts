import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { Transport} from '@nestjs/microservices';
const PORT = 3003;

async function bootstrap() {
 const app = await NestFactory.createMicroservice(
   AppModule,
   {
     transport: Transport.TCP,
     options: { port: PORT },
   },
 );
 await app.listen();
 console.log(`product service running at port ${PORT}`)
 
}
bootstrap();