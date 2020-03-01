import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';
import { TransformDate } from '../../common/utils/transform-date.util';

export class EditAppointmentDto {
  @ApiPropertyOptional()
  @Transform(TransformDate)
  @IsDate()
  @IsOptional()
  date: Date;
}
