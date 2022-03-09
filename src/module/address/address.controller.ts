import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { AddressService } from './address.service';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) { }

  @Post('create')
  async create(@Body() createAddressDto: CreateAddressDto) {
    const data = await this.addressService.create(createAddressDto);
    return{
      "statusCode":HttpStatus.CREATED,
      "message": "success",
      "data": data
    }
  }

  @Get()
  async findAll() {
    const data = await this.addressService.findAll();
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const data = await this.addressService.findOne(+id);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateAddressDto: UpdateAddressDto) {
    const data = await this.addressService.update(+id, updateAddressDto);
    return{
      "statusCode":HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  /* @Delete(':id')
  remove(@Param('id') id: string) {
    return this.addressService.remove(+id);
  } */
}
