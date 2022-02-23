import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { JobApplicantsService } from './job-applicants.service';
import { CreateJobApplicantDto } from './dto/create-job-applicant.dto';
import { UpdateJobApplicantDto } from './dto/update-job-applicant.dto';

@Controller('job-applicants')
export class JobApplicantsController {
  constructor(private readonly jobApplicantsService: JobApplicantsService) {}

  @Post('create')
  async create(@Body() createJobApplicantDto: CreateJobApplicantDto) {
    const data = await this.jobApplicantsService.create(createJobApplicantDto);
    return{
      "statusCode":HttpStatus.CREATED,
      "message": "success",
      "data": [data]
    }
  }

  @Get('findAll')
  async findAll() {
    const data = await this.jobApplicantsService.findAll();
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": [data]
    }
  }

  @Get('find/:id')
  async findJobApplicants(@Param('id') id: number) {
    const data = await this.jobApplicantsService.findJobApplicants(+id);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": [data]
    }
  }

  @Get('findApplicant/:id')
  async findApplicant(@Param('id') id: number) {
    const data = await this.jobApplicantsService.findApplicant(+id);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": [data]
    }
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() updateJobApplicantDto: UpdateJobApplicantDto) {
    const data = await this.jobApplicantsService.update(+id, updateJobApplicantDto);
    return{
      "statusCode":HttpStatus.CREATED,
      "message": "success",
      "data": [data]
    }
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: number) {
    const data = await this.jobApplicantsService.remove(+id);
    return{
      "statusCode":HttpStatus.CREATED,
      "message": "success",
      "data": "Job applican deleted successfully"
    }
  }
}
