import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post('add')
  async create(@Body() createRoleDto: CreateRoleDto) {
    const data = await this.rolesService.create(createRoleDto);
    return{
      "statusCode":HttpStatus.CREATED,
      "message": "success",
      "data": data
    }
  }

  @Get()
  async findAll() {
    const data = await this.rolesService.findAll();
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.rolesService.findOne(+id);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateRoleDto: UpdateRoleDto) {
    const data = await this.rolesService.update(+id, updateRoleDto);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const data = await this.rolesService.remove(+id);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": "Role deleted successfully"
    }
  }
}
