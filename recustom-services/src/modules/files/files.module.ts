import { Module } from '@nestjs/common';
import { FilesService } from './services/files.service';
import { FilesController } from './controllers/files.controller';

@Module({
  providers: [FilesService],
  controllers: [FilesController],
  exports: [],
  imports: [],
})
export class FilesModule {}
