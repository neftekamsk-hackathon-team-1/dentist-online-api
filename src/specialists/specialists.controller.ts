import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { ParseIntOptionalPipe } from '../common/pipes/parse-int-optional.pipe';
import { Specialist } from './entities/Specialist.entity';
import { SpecialistsService } from './specialists.service';

@Controller('specialists')
export class SpecialistsController {
  constructor(private readonly specialistsService: SpecialistsService) {}

  @Get('/')
  findAll(
    @Query('service_id', ParseIntOptionalPipe) serviceId: number,
  ): Promise<Specialist[]> {
    return this.specialistsService.findAll({
      serviceId,
    });
  }
}
