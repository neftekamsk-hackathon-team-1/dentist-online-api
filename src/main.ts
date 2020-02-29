import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import dotenv from 'dotenv';
import { initializeTransactionalContext } from 'typeorm-transactional-cls-hooked';
import { AppModule } from './app/app.module';
import { autoMigrate } from './lib/auto-migrate';
import { setupSwagger } from './lib/setup-swagger';

const logger = new Logger('bootstrap');

async function bootstrap() {
  dotenv.config();

  initializeTransactionalContext();

  if (process.env.DB_AUTO_MIGRATE !== 'false') {
    await autoMigrate();
  }

  const PORT = process.env.PORT || 5000;
  const HOST = process.env.HOST || '127.0.0.1';

  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors();

  app.set('trust proxy', process.env.IS_BEHIND_PROXY === 'true');

  setupSwagger(app);

  await app.listen(PORT, HOST, () => {
    logger.log(`Server's listening on http://${HOST}:${PORT}`);
  });
}

bootstrap().catch(err => {
  // tslint:disable-next-line no-console
  console.error(err);
  logger.error(err);
  process.exit(1);
});
