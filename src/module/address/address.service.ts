import { Injectable } from '@nestjs/common';
import { AddressRepository } from './address.repository';
import { CreateAddressDto } from './dto/create-address.dto';
import { UpdateAddressDto } from './dto/update-address.dto';

@Injectable()
export class AddressService {
  constructor(private readonly addrsRepository: AddressRepository) { }

  create(createAddressDto: CreateAddressDto) {
    return this.addrsRepository.createAddress(createAddressDto);
  }

  findAll() {
    return this.addrsRepository.getAllAddressList();
  }

  findOne(id: number) {
    return this.addrsRepository.getAddressData(id);
  }

  update(id: number, updateAddressDto: UpdateAddressDto) {
    return this.addrsRepository.updateAddress(id,updateAddressDto);
  }

  /* remove(id: number) {
    return `This action removes a #${id} address`;
  } */
}
