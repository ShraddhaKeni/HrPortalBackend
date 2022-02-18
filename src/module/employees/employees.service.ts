import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { EmployeesRepository } from './employees.repository';

@Injectable()
export class EmployeesService {
  constructor(private readonly empRepository: EmployeesRepository) { }

  create(createEmployeeDto: CreateEmployeeDto) {
    return this.empRepository.createEmployee(createEmployeeDto);
  }

  findAll() {
    return this.empRepository.getAllEmployees();
  }

  findOne(id: string) {
    return this.empRepository.getEmployeeData(id);
  }

  update(id: string, updateEmployeeDto: UpdateEmployeeDto) {
    return this.empRepository.updateEmployee(id,updateEmployeeDto);
  }
}
