import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class FilesService {
  s3Client: S3;
  s3Bucket: string;
  constructor(private configService: ConfigService) {
    this.s3Client = new S3({
      region: 'us-east-2',
      credentials: {
        accessKeyId: configService.getOrThrow('AWS_ACCESS_KEY_ID'),
        secretAccessKey: configService.getOrThrow('AWS_SECRET_ACCESS_KEY'),
      },
    });
    this.s3Bucket = configService.getOrThrow('AWS_S3_BUCKET');
  }

  async createUploadUrl(
    extension: string,
  ): Promise<{ url: string; key: string }> {
    const key = `${uuidv4()}.${extension}`;
    return {
      key,
      url: await this.s3Client.getSignedUrlPromise('putObject', {
        Bucket: this.s3Bucket,
        Key: key,
        // 1 hour
        Expires: 1 * 60 * 60,
        ACL: 'public-read',
      }),
    };
  }
}
