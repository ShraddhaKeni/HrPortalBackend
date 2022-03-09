import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ReportingToService } from './reporting-to.service';
import { CreateReportingToDto } from './dto/create-reporting-to.dto';
import { UpdateReportingToDto } from './dto/update-reporting-to.dto';

@Controller('report-to')
export class ReportingToController {
  constructor(private readonly reportingToService: ReportingToService) {}

  @Post()
  async create(@Body() createReportingToDto: CreateReportingToDto) {
    const data = await this.reportingToService.create(createReportingToDto);
    return{
      "statusCode":HttpStatus.CREATED,
      "message": "success",
      "data": data
    }
  }

  @Get()
  async findAll() {
    const data = await this.reportingToService.findAll();
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.reportingToService.findOne(+id);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateReportingToDto: UpdateReportingToDto) {
    const data = await this.reportingToService.update(+id, updateReportingToDto);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }
}
