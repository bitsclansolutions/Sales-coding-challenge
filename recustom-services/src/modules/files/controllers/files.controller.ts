import { Body, Controller, HttpException, Logger, Post } from '@nestjs/common';
import { CreateUploadUrlInput } from '../dto/files.dto';
import { FilesService } from '../services/files.service';

class FileSignedUrl {
  url: string;
}

@Controller('/files')
export class FilesController {
  private logger = new Logger(FilesController.name);
  constructor(private filesService: FilesService) {}

  @Post('/create-upload-url')
  async createUploadUrl(
    @Body('data') data: CreateUploadUrlInput,
  ): Promise<FileSignedUrl> {
    try {
      return await this.filesService.createUploadUrl(data.extension);
    } catch (error) {
      this.logger.error(error);
      throw new HttpException('Error getting signed url', 500);
    }
  }
}
