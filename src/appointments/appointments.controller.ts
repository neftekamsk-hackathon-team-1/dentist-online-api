import {
  Body,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { AppController } from '../common/decorators/app-controller.decorator';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/CreateAppointment.dto';
import { EditAppointmentDto } from './dto/EditAppointment.dto';
import { Appointment } from './entities/Appointment.entity';

@AppController({ prefix: '/' })
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post('/specialists/:specialistId/appointments')
  @ApiCreatedResponse({ type: Appointment })
  async createAppointment(
    @Body() appointmentData: CreateAppointmentDto,
  ): Promise<Appointment> {
    return this.appointmentsService.createAppointment(appointmentData);
  }

  @Get('/specialists/:specialistId/appointments')
  @ApiOkResponse({ type: [Appointment] })
  async getAppointmentsBySpecialist(
    @Param('specialistId', ParseIntPipe) specialistId: number,
  ): Promise<Appointment[]> {
    return this.appointmentsService.getAppointments(specialistId);
  }

  @Get('/appointments')
  @ApiOkResponse({ type: [Appointment] })
  async getAppointments(): Promise<Appointment[]> {
    return this.appointmentsService.getAllAppointments();
  }

  @Put('/appointments/:appointmentId')
  @ApiOkResponse({ type: Appointment })
  async editAppointment(
    @Param('appointmentId', ParseIntPipe) appointmentId: number,
    @Body() editData: EditAppointmentDto,
  ): Promise<Appointment> {
    return this.appointmentsService.editAppointment(appointmentId, editData);
  }
}
