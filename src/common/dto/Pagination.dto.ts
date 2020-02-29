import { ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsString,
  Matches,
  Min,
  MinLength,
} from 'class-validator';
import { Order } from '../../constants/Order.enum';
import { TransformInt } from '../utils/transform-int.util';
import { TransformOptional } from '../utils/transform-optional.util';

export class PaginationDTO {
  @ApiPropertyOptional({
    description: 'Сколько пропустить',
    example: '0',
  })
  @Transform(TransformInt)
  @IsInt()
  @Min(0)
  @IsOptional()
  offset?: number;

  @ApiPropertyOptional({
    description: 'Количество',
    example: 10,
  })
  @Transform(TransformInt)
  @IsInt()
  @Min(0)
  @IsOptional()
  qnt?: number;

  @ApiPropertyOptional({
    description: 'По какому полю сортировать',
    example: 'id',
  })
  @Transform(TransformOptional)
  @IsString()
  @MinLength(1)
  @Matches(/^[a-zA-Z0-9_]+$/)
  @IsOptional()
  sort?: string;

  @ApiPropertyOptional({
    description: 'В каком направлении сортировать',
    example: 'ASC',
  })
  @Transform(TransformOptional)
  @IsEnum(Order)
  @IsOptional()
  order?: Order;
}
