import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserDocsService } from './user-docs.service';
import { CreateUserDocDto } from './dto/create-user-doc.dto';
import { UpdateUserDocDto } from './dto/update-user-doc.dto';

@Controller('user-docs')
export class UserDocsController {
  constructor(private readonly userDocsService: UserDocsService) {}

  @Post()
  create(@Body() createUserDocDto: CreateUserDocDto) {
    return this.userDocsService.create(createUserDocDto);
  }

  @Get()
  findAll() {
    return this.userDocsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userDocsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDocDto: UpdateUserDocDto) {
    return this.userDocsService.update(+id, updateUserDocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userDocsService.remove(+id);
  }
}
