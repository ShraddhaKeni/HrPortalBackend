import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post('create')
  async create(@Body() createEmployeeDto: CreateEmployeeDto) {
    const data = await this.employeesService.create(createEmployeeDto);
    return{
      "statusCode":HttpStatus.CREATED,
      "message": "success",
      "data": data
    }
  }

  @Get()
  async findAll() {
    const data = await this.employeesService.findAll();
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.employeesService.findOne(id);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateEmployeeDto: UpdateEmployeeDto) {
    const data = await this.employeesService.update(id, updateEmployeeDto);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": "Employee deleted successfully"
    }
  }
}
