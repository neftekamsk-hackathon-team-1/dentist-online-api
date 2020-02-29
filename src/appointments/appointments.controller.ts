import { Body, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
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

  @Get('/:specialistId/appointments')
  @ApiOkResponse({ type: [Appointment] })
  async getAppointmentsBySpecialist(
    @Param('specialistId', ParseIntPipe) specialistId: number,
  ): Promise<Appointment[]> {
    return this.appointmentsService.getAppointments(specialistId);
  }
}