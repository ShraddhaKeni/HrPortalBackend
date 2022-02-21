import { Injectable } from '@nestjs/common';
import { CreateSalaryDto } from './dto/create-salary.dto';
import { UpdateSalaryDto } from './dto/update-salary.dto';
import { SalaryRepository } from './salary.repository';

@Injectable()
export class SalaryService {
  constructor(private readonly slaryRepository: SalaryRepository) { }

  create(createSalaryDto: CreateSalaryDto) {
    return this.slaryRepository.createSalary(createSalaryDto);
  }

  findAll() {
    return this.slaryRepository.getAllSalaries();
  }

  findOne(emp_id: string) {
    return this.slaryRepository.getEmpSalary(emp_id);
  }

}
