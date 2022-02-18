import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DesignationService } from './designation.service';
import { CreateDesignationDto } from './dto/create-designation.dto';
import { UpdateDesignationDto } from './dto/update-designation.dto';

@Controller('designation')
export class DesignationController {
  constructor(private readonly designationService: DesignationService) { }

  @Post('create')
  create(@Body() createDesignationDto: CreateDesignationDto) {
    return this.designationService.create(createDesignationDto);
  }

  @Get()
  findAll() {
    return this.designationService.findAll();
  }

  @Get('find/:id')
  findOne(@Param('id') id: number) {
    return this.designationService.findOne(+id);
  }

  @Post('update/:id')
  update(@Param('id') id: string, @Body() updateDesignationDto: UpdateDesignationDto) {
    return this.designationService.update(+id, updateDesignationDto);
  }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.designationService.remove(+id);
  // }
}
