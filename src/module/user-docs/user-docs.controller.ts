import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UserDocsService } from './user-docs.service';
import { CreateUserDocDto } from './dto/create-user-doc.dto';
import { UpdateUserDocDto } from './dto/update-user-doc.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { docFileFilter, editFileName } from 'src/utils/file-upload.utils';

@Controller('user-docs')
export class UserDocsController {
  constructor(private readonly userDocsService: UserDocsService) { }

  @Post('create')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './docs',
        filename: editFileName
      }),
      fileFilter: docFileFilter
    })
  )
  async create(@Body() createUserDocDto: CreateUserDocDto, @UploadedFile() file) {
    createUserDocDto.doc_path = file.filename;
    const data = await this.userDocsService.create(createUserDocDto);
    return {
      "statusCode": HttpStatus.CREATED,
      "message": "success",
      "data": [data]
    }
  }

  @Get('findAll')
  async findAll() {
    const data = await this.userDocsService.findAll();
    return {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": [data]
    }
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    const data = await this.userDocsService.findOne(+id);
    return {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": [data]
    }
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateUserDocDto: UpdateUserDocDto) {
    const data = await this.userDocsService.update(+id, updateUserDocDto);
    return {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": [data]
    }
  }

}
