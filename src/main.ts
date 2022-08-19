import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { TransformInterceptor } from './transform.interceptor';
import { Logger } from '@nestjs/common';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import { SwaggerModule, DocumentBuilder, ApiCookieAuth } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';
import { GlobalMiddleware } from './middleware/global.middleware';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  require('dotenv').config()
  dotenv.config();
  
  const logger = new Logger();
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const config = new DocumentBuilder()
    .setTitle('HR Portal')
    .setDescription('HR Portal API Documentation')
    .setVersion('1.0')
    .addTag('hr-portal')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  app.use(cookieParser())
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  //app.use(GlobalMiddleware);
  const port = 3000;
  await app.listen(port);
  logger.log(`Application listening on port ${port}`);
}
bootstrap();