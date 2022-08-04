import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, UseInterceptors, UploadedFile, Put } from '@nestjs/common';
import { UserDocsService } from './user-docs.service';
import { CreateUserDocDto } from './dto/create-user-doc.dto';
import { UpdateUserDocDto } from './dto/update-user-doc.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import multer, { diskStorage } from 'multer';
import { docFileFilter, editFileName } from 'src/utils/file-upload.utils';
import { CreateUserDocFormDataDto } from './dto/create-user-formdata.dto';
import { CompaniesModule } from '../companies/companies.module';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('user-docs')
export class UserDocsController {
  constructor(private readonly userDocsService: UserDocsService) { }

  @Post('create')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/uploads',
        filename: editFileName
      }),
      fileFilter: docFileFilter
    })
  )
  async create(@Body() createUserDocDto: CreateUserDocFormDataDto, @UploadedFile() file: Express.Multer.File) {
    console.log(`User doc data: ${JSON.stringify(createUserDocDto)}`);
    console.log(file)
    let userDocData = new CreateUserDocDto();
    userDocData.doc_type_id = createUserDocDto.doc_type_id;
    userDocData.doc_path =file.path;
    userDocData.status = true;
    userDocData.user_id = createUserDocDto.user_id

    
    const data = await this.userDocsService.create(userDocData);
    return {
      "statusCode": HttpStatus.CREATED,
      "message": "success",
      "data": data
      
    }
  }

  @Post('create/:id')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/uploads',
        filename: editFileName
      }),
      fileFilter: docFileFilter
    })
  )
  async updateCreate(@Param('id') id:number,@Body() createUserDocDto: CreateUserDocFormDataDto, @UploadedFile() file: Express.Multer.File)
   {
    
    const userDocID = id;
    let userDocData = new CreateUserDocDto();
    userDocData.doc_type_id = createUserDocDto.doc_type_id;
    userDocData.doc_path =file.path;
    userDocData.status = true;
    userDocData.user_id = createUserDocDto.user_id;
    userDocData.id = userDocID;
    console.log(`User doc data: ${JSON.stringify(createUserDocDto)}`);
    const data = await this.userDocsService.upDateDoc(userDocData)
    return data
  }


  @Get('findAll') 
  async findAll() {
    const data = await this.userDocsService.findAll();
    
    return {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    const data = await this.userDocsService.findOne(id);
    return {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Patch('update/:id/:doc_id')
  async update(@Param('id') id: string,@Param('doc_id') doc_id:number, @Body() updateUserDocDto: UpdateUserDocDto) {
    const data = await this.userDocsService.update(id,doc_id,updateUserDocDto);
    return {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": data
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
