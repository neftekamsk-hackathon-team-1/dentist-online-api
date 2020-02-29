import { ApiProperty } from '@nestjs/swagger';

export class CountDTO {
  @ApiProperty()
  count: number;
}
