import { Injectable } from '@nestjs/common';
import { CreateStateDto } from './dto/create-state.dto';
import { UpdateStateDto } from './dto/update-state.dto';
import { StatesRepository } from './states.repository';

@Injectable()
export class StatesService {
  constructor(private readonly statesRepository: StatesRepository) { }

  create(createStateDto: CreateStateDto) {
    return this.statesRepository.addState(createStateDto);
  }

  findAll() {
    return this.statesRepository.getAllStates();
  }
  
  findAllUsCountry(cid: number) {
    return this.statesRepository.getStateUsingCountryId(cid);
  }

  findOne(id: number) {
    return this.statesRepository.getStateData(id);
  }

  update(id: number, updateStateDto: UpdateStateDto) {
    return this.statesRepository.updateState(id,updateStateDto);
  }

  /* remove(id: number) {
    return `This action removes a #${id} state`;
  } */
}
