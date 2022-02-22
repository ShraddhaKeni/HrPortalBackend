import { HttpException, HttpStatus } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { Employee } from "./entities/employee.entity";

@EntityRepository(Employee)
export class EmployeesRepository extends Repository<Employee> {
    async createEmployee(employeeData: CreateEmployeeDto): Promise<Employee> {
        return new Promise(resolve => {
            const emp = this.create(employeeData);
            this.save(emp);
            resolve(emp);
        });
    }

    async updateEmployee(emp_id: string, employeeData: UpdateEmployeeDto): Promise<Employee> {
        return new Promise(resolve => {
            this.update(emp_id,employeeData);
            const emp = this.findOne(emp_id);
            resolve(emp);
        });
    }

    async getAllEmployees(): Promise<Employee[]> {
        return new Promise(resolve => {
            const emp = this.find({
                where: {
                    status: true
                }
            });
            resolve(emp);
        });
    }

    async getEmployeeData(emp_id: string): Promise<Employee> {
        return new Promise((resolve, reject) => {
            const emp = this.findOne(emp_id);
            emp.then(resp => {
              if (resp) {
                resolve(emp);
              } else {
                reject(new HttpException('Employee not found', HttpStatus.NOT_FOUND));
              }
            });
        });
    }
}