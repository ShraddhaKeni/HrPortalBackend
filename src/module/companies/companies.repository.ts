import { ConflictException, HttpException, HttpStatus, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateCompanyDto } from "./dto/create-company.dto";
import { UpdateCompanyDto } from "./dto/update-company.dto";
import { Companies } from "./entities/company.entity";

@EntityRepository(Companies)
export class CompaniesRepository extends Repository<Companies> {
    async createCompany(createCompanyDto:CreateCompanyDto):Promise<Companies>{
        let compdata = createCompanyDto as object;
        const comp = this.create(compdata);
        try {
            await this.save(comp);
            return comp;
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Company name already exist');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async findAllCompanies(): Promise<Companies[]> {
        return new Promise(resolve => {
            const comp = this.find();
            resolve(comp);
        });
    }

    async findCompanyData(comp_id:string): Promise<Companies>{
        return new Promise((resolve, reject) => {
            const comp = this.findOne(comp_id);
            comp.then(resp => {
                if(resp){
                    resolve(comp);
                }
                else{
                    reject(new HttpException('Company not found', HttpStatus.NOT_FOUND)); 
                }
            })
        });
    }

    async updateCompanyData(comp_id: string, updateCompanyDto: UpdateCompanyDto): Promise<Companies> {
        return new Promise(resolve => {
            this.update(comp_id,updateCompanyDto).then(
              resp => {
                const comp = this.findOne({
                  where: {
                    id: comp_id
                  }
                });
                resolve(comp);
            });
        });
      }
}