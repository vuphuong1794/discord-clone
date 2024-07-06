import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as graphqlUploadExpress from 'graphql-upload/graphqlUploadExpress.js';
async function bootstrap() {
  const logger = new Logger('Main (main.ts)');
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    allowedHeaders: [
      "Accept",
      "Authorization",
      "Content-Type",
      "X-Requested-With",
      "apollo-require-preflight"
    ]
  })
  app.use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 1 }));
  await app.listen(3000);
  logger.log('Server running on port 3000');
}
bootstrap();
