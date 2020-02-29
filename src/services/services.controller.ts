import { Get } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';
import { AppController } from '../common/decorators/app-controller.decorator';
import { Service } from './entities/Service.entity';
import { ServicesService } from './services.service';

@AppController({ prefix: 'services' })
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  @Get('/')
  @ApiOkResponse({ type: [Service] })
  async findAll(): Promise<Service[]> {
    return this.servicesService.findAll();
  }
}
