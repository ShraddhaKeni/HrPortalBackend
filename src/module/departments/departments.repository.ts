import { ConflictException, HttpException, HttpStatus, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateDepartmentDto } from "./dto/create-department.dto";
import { UpdateDepartmentDto } from "./dto/update-department.dto";
import { Department } from "./entities/department.entity";

@EntityRepository(Department)
export class DepartmentsRepository extends Repository<Department> {
    
    async createDepartment(createDepartmentDto: CreateDepartmentDto): Promise<Department> {
        const { name } = createDepartmentDto;
        const dept = this.create({ name });
        try {
            await this.save(dept);
            return dept;
        }
        catch (error) {
            if (error.code === '23505') {
                // duplicate username
                throw new ConflictException('Department already exists');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async findAllUsers(): Promise<Department[]> {
        return new Promise(resolve => {
            const departments = this.find();
            resolve(departments)
        });
    }

    async findDepartmentData(dept_id: number): Promise<Department> {
        return new Promise((resolve, reject) => {
            const department = this.findOne(dept_id);
            department.then(resp => {
                if(resp){
                    resolve(department);
                }
                else{
                    reject(new HttpException('Department not found', HttpStatus.NOT_FOUND))
                }
            })
        });
    }

    async updateDepartmentData(dept_id: number, updateDepartmentDto: UpdateDepartmentDto): Promise<Department> {
        return new Promise(resolve => {
            this.update(dept_id,updateDepartmentDto).then(
              resp => {
                const dept = this.findOne({
                  where: {
                    id: dept_id
                  }
                });
                resolve(dept);
            });
        });
      }
}