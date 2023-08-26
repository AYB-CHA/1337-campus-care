import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express, Request } from 'express';
import { diskStorage } from 'multer';
import { randomBytes } from 'crypto';
import { extname } from 'path';

@Controller('/upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}
  @Post('/file')
  @UseInterceptors(
    FileInterceptor('image', {
      dest: './upload',
      storage: diskStorage({
        filename: (req, file, callback) => {
          let error: null | Error = null;
          if (!['image/png', 'image/jpg', 'image/jpeg'].includes(file.mimetype))
            error = new Error('Unsupported filetype');
          callback(
            error,
            randomBytes(10).toString('hex') + extname(file.originalname),
          );
        },
        destination: (req, file, callback) => {
          callback(null, './upload/');
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return file.filename;
  }
}
