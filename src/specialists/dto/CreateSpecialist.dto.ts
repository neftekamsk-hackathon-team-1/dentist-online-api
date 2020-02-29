import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { TransformIntArray } from '../../common/utils/transform-int-array.util';

export class CreateSpecialistDto {
  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  full_name: string;

  @ApiPropertyOptional()
  @IsString()
  @IsOptional()
  about: string;

  @ApiPropertyOptional()
  @Transform(TransformIntArray)
  @IsArray()
  @IsNumber({}, { each: true })
  @IsOptional()
  service_ids?: number[];
}
