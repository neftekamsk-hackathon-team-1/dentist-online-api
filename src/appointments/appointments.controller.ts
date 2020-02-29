import { Body, Post } from '@nestjs/common';
import { ApiCreatedResponse } from '@nestjs/swagger';
import { AppController } from '../common/decorators/app-controller.decorator';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/CreateAppointment.dto';
import { Appointment } from './entities/Appointment.entity';

@AppController({ prefix: 'specialists' })
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post('/:specialistId/appointments')
  @ApiCreatedResponse({ type: Appointment })
  async createAppointment(
    @Body() appointmentData: CreateAppointmentDto,
  ): Promise<Appointment> {
    return this.appointmentsService.createAppointment(appointmentData);
  }
}
