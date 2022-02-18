import { ConflictException, HttpException, HttpStatus, InternalServerErrorException, NotFoundException } from "@nestjs/common";
import { isNotEmpty, isNotEmptyObject } from "class-validator";
import { EntityRepository, Repository } from "typeorm";
import { CreateDesignationDto } from "./dto/create-designation.dto";
import { UpdateDesignationDto } from "./dto/update-designation.dto";
import { Designation } from "./entities/designation.entity";

@EntityRepository(Designation)
export class DesignationRepository extends Repository<Designation>{
    async createDesignation(desgnationDto: CreateDesignationDto) {

        const designation = this.create(desgnationDto);
        try {
            await this.save(designation);
            return designation;
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException("designation already exits");
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async findAll(): Promise<Designation[]> {
        return new Promise((resolve, reject) => {
            const designations = this.find();
            designations.then(resp => {
                if (resp) {
                    resolve(designations)
                } else {
                    reject(new HttpException("No designations found", HttpStatus.NOT_FOUND))
                }
            });
        });
    }

    async findDesignation(id: number): Promise<Designation> {
        return new Promise((resolve, reject) => {
            const designation = this.findOne(id);
            designation.then(resp => {
                if (resp) {
                    resolve(designation)
                } else {
                    reject(new HttpException('Designation not found', HttpStatus.NOT_FOUND))
                }
            });
        });
    }

    async updateDesignation(design_id: number, updateDesignationDto: UpdateDesignationDto): Promise<Designation> {
        return new Promise((resolve, reject) => {
            this.update(design_id, updateDesignationDto).then(response => {
                const designation = this.findOne({
                    where: {
                        id: design_id
                    }
                });
                designation.then(response => {
                    if (response) {
                        resolve(designation)
                    } else {
                        reject(new HttpException('Designation not found', HttpStatus.NOT_FOUND))
                    }
                });
            });
        });
    }
}