import { AllExceptionsFilter, TransformInterceptor } from '@app/common';
import { appConfig } from '@app/core';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';
// import mongoose from 'mongoose';

async function bootstrap() {
  const publicForder = join(__dirname, '..', 'public');
  if (!existsSync(publicForder)) {
    mkdirSync(publicForder, { recursive: true });
  }
  const app = await NestFactory.create(AppModule);
  //app.use(helmet());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.useGlobalInterceptors(new TransformInterceptor());
  const options = new DocumentBuilder()
    .setTitle('Hrm')
    .setDescription('The Hrm API description')
    .setVersion('0.1.1')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3000);

  console.log('Starting on ', process.env.PORT);

  const PORT = appConfig.server.PORT || 3000;
  const HOST = appConfig.server.HOST || 'localhost';

  console.log(`URL Swagger http://${HOST}:${PORT}/docs`);
  console.log(`Starting on http://${HOST}:${PORT}`);
}

bootstrap();
