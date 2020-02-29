import { Injectable } from '@nestjs/common';
import _ from 'lodash';
import { ServicesService } from '../services/services.service';
import { CreateSpecialistDto } from './dto/CreateSpecialist.dto';
import { Specialist } from './entities/Specialist.entity';
import { SpecialistRepository } from './repositories/Specialist.repository';

@Injectable()
export class SpecialistsService {
  constructor(
    public readonly specialistRep: SpecialistRepository,
    private readonly servicesService: ServicesService,
  ) {}

  public async findAll({
    serviceId,
  }: {
    serviceId?: number;
  } = {}): Promise<Specialist[]> {
    const qb = this.specialistRep.createQueryBuilder('specialists');

    if (!_.isNil(serviceId)) {
      qb.leftJoin('specialists.services', 'services');
      qb.where('services.id = :serviceId', { serviceId });
    }

    return qb.getMany();
  }

  public async createSpecialist({
    service_ids,
    ...specialistData
  }: CreateSpecialistDto): Promise<Specialist> {
    const services = _.isNil(service_ids)
      ? []
      : await this.servicesService.serviceRep.findByIds(service_ids);

    const specialist = this.specialistRep.create(specialistData);
    specialist.services = services;
    await this.specialistRep.save(specialist);

    return specialist;
  }
}
