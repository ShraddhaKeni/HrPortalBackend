import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { UserDocsService } from './user-docs.service';
import { CreateUserDocDto } from './dto/create-user-doc.dto';
import { UpdateUserDocDto } from './dto/update-user-doc.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { docFileFilter, editFileName } from 'src/utils/file-upload.utils';
import { CreateUserDocFormDataDto } from './dto/create-user-formdata.dto';

@Controller('user-docs')
export class UserDocsController {
  constructor(private readonly userDocsService: UserDocsService) { }

  @Post('create')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './src/docs',
        filename: editFileName
      }),
      fileFilter: docFileFilter
    })
  )
  async create(@Body() createUserDocDto: CreateUserDocFormDataDto, @UploadedFile() file: Express.Multer.File) {
    console.log(`User doc data: ${JSON.stringify(createUserDocDto)}`);
    let userDocData = new CreateUserDocDto();
    userDocData.doc_type_id = +createUserDocDto.doc_type_id
    userDocData.doc_path = file.filename;
    userDocData.status = true;
    userDocData.user_id = createUserDocDto.user_id
    const data = await this.userDocsService.create(userDocData);
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
    const data = await this.userDocsService.findOne(id);
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

  @Delete('delete/:id')
  async remove(@Param('id') id: number) {
    const data = await this.userDocsService.remove(+id);
    return {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": "user document deleted successfully"
    }
  }

}
