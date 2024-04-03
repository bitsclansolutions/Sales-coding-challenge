import { Module } from '@nestjs/common';
import { HasuraModule } from '@golevelup/nestjs-hasura';
import { join } from 'path';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { validate } from './config/env.validation';
import { GraphQLRequestModule } from '@golevelup/nestjs-graphql-request';
import HealthcheckController from './healthcheck/Healthcheck.controller';
import PdfgenerateController from './pdfgenerate/Pdfgenerate.controller';
import { FilesModule } from './modules/files/files.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate,
    }),

    HasuraModule.forRootAsync(HasuraModule, {
      useFactory: (config: ConfigService) => ({
        webhookConfig: {
          secretFactory: config.getOrThrow(
            'HASURA_NESTJS_WEBHOOK_SECRET_HEADER_VALUE',
          ),
          secretHeader: 'x-hasura-webhook-secret',
        },
        managedMetaDataConfig: config.get('AUTO_MANAGE_HASURA_METADATA')
          ? {
              dirPath: join(process.cwd(), '..', 'recustom-hasura', 'metadata'),
              secretHeaderEnvName: 'HASURA_NESTJS_WEBHOOK_SECRET_HEADER_VALUE',
              nestEndpointEnvName: 'NESTJS_EVENT_WEBHOOK_ENDPOINT',
              defaultEventRetryConfig: {
                intervalInSeconds: 15,
                numRetries: 3,
                timeoutInSeconds: 100,
                toleranceSeconds: 21600,
              },
              metadataVersion: 'v3' as const,
            }
          : undefined,
      }),
      inject: [ConfigService],
    }),

    GraphQLRequestModule.forRootAsync(GraphQLRequestModule, {
      useFactory: (config: ConfigService) => ({
        // Exposes configuration options based on the graphql-request package
        endpoint: config.getOrThrow('HASURA_GRAPHQL_ENDPOINT'),
        options: {
          headers: {
            'content-type': 'application/json',
            'x-hasura-admin-secret': config.getOrThrow(
              'HASURA_GRAPHQL_ADMIN_SECRET',
            ),
          },
        },
      }),
      inject: [ConfigService],
    }),

    FilesModule,
  ],
  controllers: [HealthcheckController, PdfgenerateController],
  providers: [],
})
export class AppModule {}
