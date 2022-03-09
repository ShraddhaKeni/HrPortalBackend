import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentsService: DepartmentsService) {}

  @Post('add')
  async create(@Body() createDepartmentDto: CreateDepartmentDto) {
    const data = await this.departmentsService.create(createDepartmentDto);
    return{
      "statusCode":HttpStatus.CREATED,
      "message": "success",
      "data": data
    }
  }

  @Get('viewall')
  async findAll() {
    const data = await this.departmentsService.findAll();
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const data = await this.departmentsService.findOne(+id);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateDepartmentDto: UpdateDepartmentDto) {
    const data = await this.departmentsService.update(+id, updateDepartmentDto);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.departmentsService.remove(+id);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": "Department deleted successfully"
    }
  }
}
