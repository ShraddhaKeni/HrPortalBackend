import { HttpException, HttpStatus, UseInterceptors } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateEmployeeDto } from "./dto/create-employee.dto";
import { UpdateEmployeeDto } from "./dto/update-employee.dto";
import { Employee } from "./entities/employee.entity";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { docFileFilter,editFileName } from "src/utils/file-upload.utils";
import { CreateEmployeeFormDataDto } from "./dto/create-employee-formdata.dto";
import { resolve } from "path";
import { response } from "express";

@EntityRepository(Employee)
export class EmployeesRepository extends Repository<Employee> {
   
    async createEmployee(employeeData: CreateEmployeeDto): Promise<Employee> {
        return new Promise((resolve,reject) => {
            const emp = this.create(employeeData);
            this.save(emp).then(resp=>{
                resolve(emp);
            })
            .catch(err=>{
                reject(new HttpException(err, HttpStatus.NOT_FOUND));
            })
            
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

    async updateEmpForm(id:string,updateEmployee: UpdateEmployeeDto):Promise<Employee>
    {
       return new Promise((resolve,reject)=>{
            const update = this.update(id,updateEmployee);
            const emp_id = id
            update.then(response=>{
                if(response)
                {
                    const find_emp = this.findOne({where:{id:emp_id}})
                    find_emp.then(res=>{
                        if(res)
                        {
                            this.update(emp_id,updateEmployee)
                            resolve(find_emp)
                        }
                        else
                        {
                            reject(new HttpException('Employee not found', HttpStatus.NOT_FOUND));
                        }
                    })
                }
            }).catch(err=>{
                reject(new HttpException('Employee not found', HttpStatus.NOT_FOUND));
            })
       })
    }
}