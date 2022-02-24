import { Injectable } from '@nestjs/common';
import { CreateLevelTypeDto } from './dto/create-level-type.dto';
import { UpdateLevelTypeDto } from './dto/update-level-type.dto';
import { LevelTypeRepository } from './level-types.repository';

@Injectable()
export class LevelTypesService {
  constructor(private readonly levelTypeRepository: LevelTypeRepository){}
  create(createLevelTypeDto: CreateLevelTypeDto) {
    return this.levelTypeRepository.createLevelType(createLevelTypeDto);
  }

  findAll() {
    return this.levelTypeRepository.findAllLevelTypes();
  }

  findOne(id: number) {
    return this.levelTypeRepository.findLevelTypeData(id);
  }

  update(id: number, updateLevelTypeDto: UpdateLevelTypeDto) {
    return this.levelTypeRepository.updateLevelType(id,updateLevelTypeDto);
  }

  remove(id: number) {
    return `This action removes a #${id} levelType`;
  }
}
