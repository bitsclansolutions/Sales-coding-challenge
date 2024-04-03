import { TrackedHasuraEventHandler } from '@golevelup/nestjs-hasura';

export const OnEntityInserted = (entity: string) =>
  TrackedHasuraEventHandler({
    triggerName: `${entity}_inserted`,
    tableName: entity,
    definition: {
      type: 'insert',
    },
    databaseName: 'recustom',
    schema: 'public',
  });

export const OnEntityUpdated = (entity: string) =>
  TrackedHasuraEventHandler({
    triggerName: `${entity}_updated`,
    tableName: entity,
    definition: {
      type: 'update',
    },
    databaseName: 'recustom',
    schema: 'public',
  });

export const OnEntityDeleted = (entity: string) =>
  TrackedHasuraEventHandler({
    triggerName: `${entity}_deleted`,
    tableName: entity,
    definition: {
      type: 'delete',
    },
    databaseName: 'recustom',
    schema: 'public',
  });
