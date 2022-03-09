import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { LevelTypesService } from './level-types.service';
import { CreateLevelTypeDto } from './dto/create-level-type.dto';
import { UpdateLevelTypeDto } from './dto/update-level-type.dto';

@Controller('level-types')
export class LevelTypesController {
  constructor(private readonly levelTypesService: LevelTypesService) {}

  @Post('add')
  async create(@Body() createLevelTypeDto: CreateLevelTypeDto) {
    const data = await this.levelTypesService.create(createLevelTypeDto);
    return{
      "statusCode":HttpStatus.CREATED,
      "message": "success",
      "data": data
    }
  }

  @Get()
  async findAll() {
    const data = await this.levelTypesService.findAll();
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.levelTypesService.findOne(+id);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLevelTypeDto: UpdateLevelTypeDto) {
    const data = await this.levelTypesService.update(+id, updateLevelTypeDto);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.levelTypesService.remove(+id);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": "Level-type deleted successfully"
    }
  }
}
