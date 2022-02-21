import { Injectable } from '@nestjs/common';
import { CountriesRepository } from './countries.repository';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';

@Injectable()
export class CountriesService {
  constructor(private readonly countryRepository: CountriesRepository) { }

  create(createCountryDto: CreateCountryDto) {
    return this.countryRepository.addCountry(createCountryDto);
  }

  findAll() {
    return this.countryRepository.getAllCountries();
  }

  findOne(id: number) {
    return this.countryRepository.getCountryData(id);
  }

  update(id: number, updateCountryDto: UpdateCountryDto) {
    return this.countryRepository.updateCountry(id,updateCountryDto);
  }

  /* remove(id: number) {
    return `This action removes a #${id} country`;
  } */
}
