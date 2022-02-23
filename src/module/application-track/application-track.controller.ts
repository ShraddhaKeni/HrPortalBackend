import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ApplicationTrackService } from './application-track.service';
import { CreateApplicationTrackDto } from './dto/create-application-track.dto';
import { UpdateApplicationTrackDto } from './dto/update-application-track.dto';

@Controller('application-track')
export class ApplicationTrackController {
  constructor(private readonly applicationTrackService: ApplicationTrackService) {}

  @Post('create')
  async create(@Body() createApplicationTrackDto: CreateApplicationTrackDto) {
    const data = await this.applicationTrackService.create(createApplicationTrackDto);
    return {
      "statusCode":HttpStatus.CREATED,
      "message": "success",
      "data": [data]
    }
  }

  @Get('findAll')
  async findAll() {
    const data = await this.applicationTrackService.findAll();
    return {
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": [data]
    }
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    const data = await this.applicationTrackService.findOne(+id);
    return {
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": [data]
    }
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateApplicationTrackDto: UpdateApplicationTrackDto) {
    const data = await this.applicationTrackService.update(+id, updateApplicationTrackDto);
    return {
      "statusCode":HttpStatus.CREATED,
      "message": "success",
      "data": [data]
    }
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: string) {
    const data = await this.applicationTrackService.remove(+id);
    return {
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": "Job application deleted successfully"
    }
  }
}
