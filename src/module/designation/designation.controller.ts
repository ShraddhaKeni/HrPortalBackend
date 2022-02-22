import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { DesignationService } from './designation.service';
import { CreateDesignationDto } from './dto/create-designation.dto';
import { UpdateDesignationDto } from './dto/update-designation.dto';

@Controller('designation')
export class DesignationController {
  constructor(private readonly designationService: DesignationService) { }

  @Post('create')
  async create(@Body() createDesignationDto: CreateDesignationDto) {
    const data = await this.designationService.create(createDesignationDto);
    return {
      "statusCode": HttpStatus.CREATED,
      "message": "success",
      "data": [data]
    }
  }

  @Get('findAll')
  async findAll() {
    const data = await this.designationService.findAll();
    return {
      "statusCode": HttpStatus.CREATED,
      "message": "success",
      "data": [data]
    }
  }

  @Get('find/:id')
  async findOne(@Param('id') id: number) {
    const data = await this.designationService.findOne(+id);
    return {
      "statusCode": HttpStatus.CREATED,
      "message": "success",
      "data": [data]
    }
  }

  @Patch('update/:id')
  async update(@Param('id') id: number, @Body() updateDesignationDto: UpdateDesignationDto) {
    const data = await this.designationService.update(+id, updateDesignationDto);
    return {
      "statusCode": HttpStatus.CREATED,
      "message": "success",
      "data": [data]
    }
  }

  @Delete('delete/:id')
  async delete(@Param('id') id: number) {
    const data = await this.designationService.remove(+id);
    return {
      "statusCode": HttpStatus.CREATED,
      "message": "success",
      "data": "designation deleted successfully"
    }
  }

}
