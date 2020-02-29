import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialistRepository } from './repositories/Specialist.repository';
import { SpecialistsController } from './specialists.controller';
import { SpecialistsService } from './specialists.service';

@Module({
  imports: [TypeOrmModule.forFeature([SpecialistRepository])],
  providers: [SpecialistsService],
  controllers: [SpecialistsController],
  exports: [SpecialistsService],
})
export class SpecialistsModule {}
