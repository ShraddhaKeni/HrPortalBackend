import { Controller, Get, Post, Body, Param, HttpStatus } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { CreateSalaryDto } from './dto/create-salary.dto';

@Controller('salary')
export class SalaryController {
  constructor(private readonly salaryService: SalaryService) { }

  @Post('create')
  async create(@Body() createSalaryDto: CreateSalaryDto) {
    const data = await this.salaryService.create(createSalaryDto);
    return{
      "statusCode":HttpStatus.CREATED,
      "message": "success",
      "data": data
    }
  }

  @Post('update')
  async update(@Body() createSalaryDto: CreateSalaryDto) {
    const data = await this.salaryService.create(createSalaryDto);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Get('findAll')
  async findAll() {
    const data = await this.salaryService.findAll();
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    const data = await this.salaryService.findOne(id);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

}
