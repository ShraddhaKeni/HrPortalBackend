import { Injectable } from '@nestjs/common';
import { CompaniesRepository } from './companies.repository';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompaniesService {
  constructor(private readonly companiesRepository:CompaniesRepository){}
  create(createCompanyDto: CreateCompanyDto) {
    return this.companiesRepository.createCompany(createCompanyDto);
  }

  findAll() {
    return this.companiesRepository.findAllCompanies();
  }

  findOne(id: string) {
    return this.companiesRepository.findCompanyData(id);
  }

  update(id: string, updateCompanyDto: UpdateCompanyDto) {
    return this.companiesRepository.updateCompanyData(id,updateCompanyDto);
  }

  remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
