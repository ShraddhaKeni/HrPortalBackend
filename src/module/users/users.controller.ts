import { Controller, Get, Post, Body, Patch, Param, Delete, UploadedFile, UseInterceptors } from '@nestjs/common';
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
  create(@Body() createUserDto: CreateUserFormDataDto, @UploadedFile() file: Express.Multer.File) {
    let userData = new CreateUserDto();
    userData.username = createUserDto.username;
    userData.password = createUserDto.password;
    userData.role_id = +createUserDto.role_id;
    userData.contact_no = createUserDto.contact_no;
    userData.email = createUserDto.email;
    userData.dob = createUserDto.dob;
    userData.profile_pic = file.filename;
    return this.usersService.create(userData);
  }

  @Get('findAll')
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

}
