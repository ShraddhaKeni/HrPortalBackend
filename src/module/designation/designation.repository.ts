import { ConflictException, InternalServerErrorException, NotFoundException } from "@nestjs/common";
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
        return new Promise(resolve => {
            const designations = this.find();
            resolve(designations)
        });
    }

    async findDesignation(id: number): Promise<Designation> {
        return new Promise(resolve => {
            const designation = this.findOne(id);
            if (designation) {
                resolve(designation);
            }
            throw new NotFoundException("No designation found.");
        });
    }

    async updateDesignation(design_id: number, updateDesignationDto: UpdateDesignationDto): Promise<Designation> {
        return new Promise(resolve => {
            this.update(design_id, updateDesignationDto).then(response => {
                const designation = this.findOne({
                    where: {
                        id: design_id
                    }
                });
                if (designation) {
                    resolve(designation);
                }
                throw new NotFoundException("designation not found.");
            });
        });
    }
}