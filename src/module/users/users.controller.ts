import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateUserFormDataDto } from './dto/create-user-formdata.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { editFileName, imageFileFilter } from 'src/utils/file-upload.utils';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  @UseInterceptors(
    FileInterceptor('profile_pic', {
      storage: diskStorage({
        destination: './src/uploads/profile',
        filename: editFileName
      }),
      fileFilter: imageFileFilter
    })
  )
  async create(@Body() createUserDto: CreateUserFormDataDto, @UploadedFile() file?: Express.Multer.File) {
    let userData = new CreateUserDto();
    userData.username = createUserDto.username;
    userData.password = createUserDto.password;
    userData.role_id = +createUserDto.role_id;
    userData.contact_no = createUserDto.contact_no;
    userData.email = createUserDto.email;
    userData.dob = createUserDto.dob;
    if(file != null) {
      userData.profile_pic = file.path;
    }
    const data = await this.usersService.create(userData);
    return{
      "statusCode":HttpStatus.CREATED,
      "message": "success",
      "data": data
    }
  }

  @Get('findAll')
  async findAll() {
    const data = await this.usersService.findAll();
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.usersService.findOne(id);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const data = await this.usersService.update(id, updateUserDto);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

}
