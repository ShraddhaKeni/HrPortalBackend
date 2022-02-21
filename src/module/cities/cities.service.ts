import { Injectable } from '@nestjs/common';
import { CitiesRepository } from './cities.repository';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';

@Injectable()
export class CitiesService {
  constructor(private readonly citiesRepository: CitiesRepository) { }

  create(createCityDto: CreateCityDto) {
    return this.citiesRepository.addCity(createCityDto);
  }

  findAll() {
    return this.citiesRepository.getAllCities();
  }

  findOne(id: number) {
    return this.citiesRepository.getCityData(id);
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return this.citiesRepository.updateCity(id,updateCityDto);
  }

  /* remove(id: number) {
    return `This action removes a #${id} city`;
  } */
}
