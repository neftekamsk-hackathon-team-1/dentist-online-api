import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServicesModule } from '../services/services.module';
import { SpecialistRepository } from './repositories/Specialist.repository';
import { SpecialistsController } from './specialists.controller';
import { SpecialistsService } from './specialists.service';

@Module({
  imports: [TypeOrmModule.forFeature([SpecialistRepository]), ServicesModule],
  providers: [SpecialistsService],
  controllers: [SpecialistsController],
  exports: [SpecialistsService],
})
export class SpecialistsModule {}
