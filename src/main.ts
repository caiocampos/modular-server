import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import helmet from 'helmet';
import { AppModule } from './app.module';

const bootstrap = async () => {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  app.enableCors();
  app.use(helmet());
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(
    process.env.PORT ?? 3000,
    process.env.ADDRESS ?? '127.0.0.1',
  );
};
bootstrap();
