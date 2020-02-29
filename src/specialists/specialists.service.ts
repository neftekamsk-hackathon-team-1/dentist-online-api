import { Injectable } from '@nestjs/common';
import _ from 'lodash';
import { Specialist } from './entities/Specialist.entity';
import { SpecialistRepository } from './repositories/Specialist.repository';

@Injectable()
export class SpecialistsService {
  constructor(public readonly specialistRep: SpecialistRepository) {}

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
}
