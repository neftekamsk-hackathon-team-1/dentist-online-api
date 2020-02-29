import { Injectable } from '@nestjs/common';
import _ from 'lodash';
import { ServicesService } from '../services/services.service';
import { SpecialistsService } from '../specialists/specialists.service';
import { CreateAppointmentDto } from './dto/CreateAppointment.dto';
import { Appointment } from './entities/Appointment.entity';
import { AppointmentRepository } from './repositories/Appointment.repository';

@Injectable()
export class AppointmentsService {
  constructor(
    public readonly appointmentRep: AppointmentRepository,
    private readonly specialistsService: SpecialistsService,
    private readonly servicesService: ServicesService,
  ) {}
  public async createAppointment(
    appointmentData: CreateAppointmentDto,
  ): Promise<Appointment> {
    const specialist = _.isNil(appointmentData.specialist_id)
      ? null
      : await this.specialistsService.specialistRep.findOne(
          appointmentData.specialist_id,
        );
    const service = _.isNil(appointmentData.service_id)
      ? null
      : await this.servicesService.serviceRep.findOne(
          appointmentData.service_id,
        );

    const appointment: Appointment = this.appointmentRep.create({
      date: appointmentData.date,
      phone: appointmentData.phone,
      service,
      specialist,
    });
    await this.appointmentRep.save(appointment);

    return appointment;
  }

  public async getAppointments(specialistId: number): Promise<Appointment[]> {
    return this.appointmentRep.find({
      specialist_id: specialistId,
    });
  }
}
