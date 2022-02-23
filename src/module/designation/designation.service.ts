import { Injectable } from '@nestjs/common';
import { DesignationRepository } from './designation.repository';
import { CreateDesignationDto } from './dto/create-designation.dto';
import { UpdateDesignationDto } from './dto/update-designation.dto';

@Injectable()
export class DesignationService {
  constructor(private readonly designationRepository: DesignationRepository) { }

  create(createDesignationDto: CreateDesignationDto) {
    return this.designationRepository.createDesignation(createDesignationDto)
  }

  findAll() {
    return this.designationRepository.findAll();
  }

  findOne(id: number) {
    return this.designationRepository.findDesignation(id);
  }

  update(id: number, updateDesignationDto: UpdateDesignationDto) {
    return this.designationRepository.updateDesignation(id, updateDesignationDto);
  }

  remove(id: number) {
    return this.designationRepository.deleteDesignation(id)
  }
}
