import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import appRootPath from 'app-root-path';
import { LoggerModule } from 'nestjs-pino';
import path from 'path';
import pino from 'pino';
import { AppointmentsModule } from '../appointments/appointments.module';
import { ConfigModule, ConfigService } from '../config';
import { ServicesModule } from '../services/services.module';
import { SpecialistsModule } from '../specialists/specialists.module';

@Module({
  imports: [
    ConfigModule,
    ServicesModule,
    SpecialistsModule,
    AppointmentsModule,
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
