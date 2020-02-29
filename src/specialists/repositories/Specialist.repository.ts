import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { Specialist } from '../entities/Specialist.entity';

@EntityRepository(Specialist)
export class SpecialistRepository extends BaseRepository<Specialist> {}
