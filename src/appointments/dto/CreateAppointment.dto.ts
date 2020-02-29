import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import { IsDate, IsIn, IsInt, IsOptional, IsString } from 'class-validator';
import { TransformDate } from '../../common/utils/transform-date.util';
import { TransformInt } from '../../common/utils/transform-int.util';

export class CreateAppointmentDto {
  @ApiPropertyOptional()
  @Transform(TransformDate)
  @IsDate()
  @IsOptional()
  date?: Date;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  phone?: string;

  @ApiPropertyOptional()
  @Transform(TransformInt)
  @IsInt()
  @IsOptional()
  specialist_id?: number;

  @ApiPropertyOptional()
  @Transform(TransformInt)
  @IsInt()
  @IsOptional()
  service_id?: number;
}
