import { Injectable } from '@nestjs/common';
import { DepartmentsRepository } from './departments.repository';
import { CreateDepartmentDto } from './dto/create-department.dto';
import { UpdateDepartmentDto } from './dto/update-department.dto';

@Injectable()
export class DepartmentsService {
  constructor(private readonly departmentRepository: DepartmentsRepository) { }
  create(createDepartmentDto: CreateDepartmentDto) {
    return this.departmentRepository.createDepartment(createDepartmentDto)
  }

  findAll() {
    return this.departmentRepository.findAllUsers();
  }

  findOne(id: number) {
    return this.departmentRepository.findDepartmentData(id);
  }

  update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    return this.departmentRepository.updateDepartmentData(id,updateDepartmentDto);
  }

  remove(id: number) {
    return `This action removes a #${id} department`;
  }
}
