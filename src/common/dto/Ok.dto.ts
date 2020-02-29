import { ApiProperty } from '@nestjs/swagger';

export class OkDTO {
  @ApiProperty({
    example: 1,
  })
  ok: 1;
}
