import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsDate, IsOptional } from 'class-validator';
import { TransformDate } from '../utils/transform-date.util';

export class DateRangeDTO {
  @ApiPropertyOptional({
    type: 'string',
    format: 'ISO 8601',
  })
  @Transform(TransformDate)
  @IsDate()
  @IsOptional()
  from_date?: Date;

  @ApiPropertyOptional({
    type: 'string',
    format: 'ISO 8601',
  })
  @Transform(TransformDate)
  @IsDate()
  @IsOptional()
  to_date?: Date;
}
