import { Injectable } from '@nestjs/common';
import { Service } from './entities/Service.entity';
import { ServiceRepository } from './repositories/Service.repository';

@Injectable()
export class ServicesService {
  constructor(public readonly serviceRep: ServiceRepository) {}

  public async findAll(): Promise<Service[]> {
    return await this.serviceRep.find();
  }
}
