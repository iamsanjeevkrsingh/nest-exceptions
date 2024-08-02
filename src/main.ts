import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppCustomFilterException } from './app.exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AppCustomFilterException()); //The useGlobalFilters() method does not set up filters for gateways or hybrid applications.
  await app.listen(3000);
}
bootstrap();
