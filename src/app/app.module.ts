import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import appRootPath from 'app-root-path';
import { LoggerModule } from 'nestjs-pino';
import path from 'path';
import pino from 'pino';
import { ConfigModule, ConfigService } from '../config';
import { ServicesModule } from '../services/services.module';

@Module({
  imports: [
    ConfigModule,
    ServicesModule,
    LoggerModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        if (configService.get('NODE_ENV') === 'production') {
          return {
            stream: pino.destination(
              path.join(appRootPath.toString(), 'logs', 'combined.log'),
            ),
          };
        }
        return {
          prettyPrint: true,
        };
      },
      inject: [ConfigService],
    }),
    TypeOrmModule.forRoot(),
  ],
})
export class AppModule {}
