import { HttpException, HttpStatus } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateSalaryDto } from "./dto/create-salary.dto";
import { Salary } from "./entities/salary.entity";

@EntityRepository(Salary)
export class SalaryRepository extends Repository<Salary>{

    async createSalary(salaryDto: CreateSalaryDto) {

        const emp = this.findOne({
            where: {
                emp_id: salaryDto.emp_id,
                status: true
            }
        });
        emp.then(res => {
            if (res) {
                this.update(res.id, { status: false })
            }
        })

        const salary = this.create(salaryDto);
        try {
            await this.save(salary);
            return salary;
        } catch (error) {
            throw new HttpException("No employee found", HttpStatus.NOT_FOUND);
        }
    }

    async getAllSalaries(): Promise<Salary[]> {
        return new Promise((resolve, reject) => {
            const salaries = this.find({
                where: {
                    //status: true
                }
            });
            salaries.then(response => {
                if (response) {
                    resolve(salaries)
                } else {
                    reject(new HttpException("No salaries found", HttpStatus.NOT_FOUND))
                }
            });
        });
    }

    async getEmpSalary(emp_id: string): Promise<Salary[]> {
        return new Promise((resolve, reject) => {
            const salary = this.find({
                where: {
                    emp_id: emp_id
                }
            });
            salary.then(response => {
                if (response) {
                    resolve(salary)
                } else {
                    reject(new HttpException("No salaries found", HttpStatus.NOT_FOUND))
                }
            })
        });
    }
}