import { ApiQuery } from '@nestjs/swagger';

export function ApiLoadRelationsQuery(relations: string[]) {
  return ApiQuery({
    name: 'loadRelations',
    required: false,
    isArray: true,
    enum: relations,
    description: 'Какие отношения должы быть возвращены',
  });
}
