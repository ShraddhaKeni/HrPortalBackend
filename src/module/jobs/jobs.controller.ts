import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';

@Controller('jobs')
export class JobsController {
  constructor(private readonly jobsService: JobsService) { }

  @Post('create')
  async create(@Body() createJobDto: CreateJobDto) {
    const data = await this.jobsService.create(createJobDto);
    return {
      "statusCode": HttpStatus.CREATED,
      "message": "success",
      "data": [data]
    }
  }

  @Get('findAll')
  async findAll() {
    const data = await this.jobsService.findAll();
    return {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": [data]
    }
  }

  @Get('find/:id')
  async findOne(@Param('id') id: number) {
    const data = await this.jobsService.findOne(+id);
    return {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": [data]
    }
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() updateJobDto: UpdateJobDto) {
    const data = await this.jobsService.update(+id, updateJobDto);
    return {
      "statusCode": HttpStatus.CREATED,
      "message": "success",
      "data": [data]
    }
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: number) {
    const data = await this.jobsService.remove(+id);
    return {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": "job deleted successfully"
    }
  }
}
