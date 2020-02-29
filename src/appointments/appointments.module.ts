import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesModule } from '../services/services.module';
import { SpecialistsModule } from '../specialists/specialists.module';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { AppointmentRepository } from './repositories/Appointment.repository';

@Module({
  imports: [
    SpecialistsModule,
    ServicesModule,
    TypeOrmModule.forFeature([AppointmentRepository]),
  ],
  providers: [AppointmentsService],
  controllers: [AppointmentsController],
  exports: [AppointmentsService],
})
export class AppointmentsModule {}
