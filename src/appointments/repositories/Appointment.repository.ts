import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { Appointment } from '../entities/Appointment.entity';

@EntityRepository(Appointment)
export class AppointmentRepository extends BaseRepository<Appointment> {}
