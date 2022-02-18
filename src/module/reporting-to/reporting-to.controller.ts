import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReportingToService } from './reporting-to.service';
import { CreateReportingToDto } from './dto/create-reporting-to.dto';
import { UpdateReportingToDto } from './dto/update-reporting-to.dto';

@Controller('report-to')
export class ReportingToController {
  constructor(private readonly reportingToService: ReportingToService) {}

  @Post()
  create(@Body() createReportingToDto: CreateReportingToDto) {
    return this.reportingToService.create(createReportingToDto);
  }

  @Get()
  findAll() {
    return this.reportingToService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reportingToService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReportingToDto: UpdateReportingToDto) {
    return this.reportingToService.update(+id, updateReportingToDto);
  }
}
