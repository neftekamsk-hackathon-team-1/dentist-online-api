import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { Service } from '../entities/Service.entity';

@EntityRepository(Service)
export class ServiceRepository extends BaseRepository<Service> {}
