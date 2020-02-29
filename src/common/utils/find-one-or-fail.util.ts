import {
  EntityManager,
  FindConditions,
  FindOneOptions,
  ObjectType,
} from 'typeorm';
import { ErrorCode, makeError } from '../errors/index';

const ENTITY_TO_ERROR_MAP = new Map<any, ErrorCode>([]);

/**
 * Кастомная версия стандартной EntityManager#findOneOrFail.
 * Отличие в том, что этот метод если не находит запись,
 * то выбрасывает правильный и соответствующий код ошибки.
 *
 * @param entityClass Класс моделя
 * @param id
 * @param manager
 */
export async function findOneOrFail<Entity = any>(
  entityClass: ObjectType<Entity>,
  idOrOptions:
    | number
    | string
    | FindOneOptions<Entity>
    | FindConditions<Entity>,
  manager: EntityManager,
) {
  const object = await manager.findOne<Entity>(entityClass, idOrOptions as any);

  if (!object) {
    const errorCode = ENTITY_TO_ERROR_MAP.get(entityClass);
    throw makeError(errorCode || 'NOT_FOUND');
  }

  return object;
}
