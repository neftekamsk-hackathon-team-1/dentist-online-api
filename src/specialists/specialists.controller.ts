import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse } from '@nestjs/swagger';
import { ParseIntOptionalPipe } from '../common/pipes/parse-int-optional.pipe';
import { CreateSpecialistDto } from './dto/CreateSpecialist.dto';
import { Specialist } from './entities/Specialist.entity';
import { SpecialistsService } from './specialists.service';

@Controller('specialists')
export class SpecialistsController {
  constructor(private readonly specialistsService: SpecialistsService) {}

  @Get('/')
  @ApiOkResponse({ type: [Specialist] })
  findAll(
    @Query('service_id', ParseIntOptionalPipe) serviceId: number,
  ): Promise<Specialist[]> {
    return this.specialistsService.findAll({
      serviceId,
    });
  }

  @Post('/')
  @ApiCreatedResponse({ type: Specialist })
  async createSpecialist(
    @Body() specialistData: CreateSpecialistDto,
  ): Promise<Specialist> {
    return this.specialistsService.createSpecialist(specialistData);
  }
}
