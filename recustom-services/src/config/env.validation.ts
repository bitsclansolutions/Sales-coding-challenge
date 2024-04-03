import { plainToInstance } from 'class-transformer';
import { IsEnum, IsNumber, IsString, validateSync } from 'class-validator';

enum Environment {
  Development = 'development',
  Production = 'production',
  Test = 'test',
  Provision = 'provision',
}

class EnvironmentVariables {
  @IsEnum(Environment)
  NODE_ENV: Environment;

  @IsNumber()
  PORT: number;

  @IsString()
  HASURA_NESTJS_WEBHOOK_SECRET_HEADER_VALUE: string;

  @IsString()
  AUTH0_DOMAIN: string;

  @IsString()
  AUTH0_CLIENT_ID: string;

  @IsString()
  AUTH0_CLIENT_SECRET: string;

  @IsString()
  HASURA_GRAPHQL_ENDPOINT: string;

  @IsString()
  HASURA_GRAPHQL_ADMIN_SECRET: string;
}

export function validate(config: Record<string, unknown>) {
  const validatedConfig = plainToInstance(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  });

  if (errors.length > 0) {
    throw new Error(errors.toString());
  }
  return validatedConfig;
}
