import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { UserDocsService } from './user-docs.service';
import { CreateUserDocDto } from './dto/create-user-doc.dto';
import { UpdateUserDocDto } from './dto/update-user-doc.dto';

@Controller('user-docs')
export class UserDocsController {
  constructor(private readonly userDocsService: UserDocsService) { }

  @Post('create')
  async create(@Body() createUserDocDto: CreateUserDocDto) {
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
