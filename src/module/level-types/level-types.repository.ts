import { ConflictException, HttpException, HttpStatus, InternalServerErrorException } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateLevelTypeDto } from "./dto/create-level-type.dto";
import { UpdateLevelTypeDto } from "./dto/update-level-type.dto";
import { LevelType } from "./entities/level-type.entity";

@EntityRepository(LevelType)
export class LevelTypeRepository extends Repository<LevelType>{
    async createLevelType(createLevelTypeDto: CreateLevelTypeDto): Promise<LevelType>{
        const { name } = createLevelTypeDto;
        const levelType = this.create({ name });
        try {
            await this.save(levelType);
            return levelType;
        } catch (error) {
            if (error.code === '23505') {
                throw new ConflictException('Level type already exist');
            } else {
                throw new InternalServerErrorException();
            }
        }
    }

    async findAllLevelTypes(): Promise<LevelType[]> {
        return new Promise(resolve => {
            const levelType = this.find();
            resolve(levelType);
        });
    }

    async findLevelTypeData(level_id:number): Promise<LevelType>{
        return new Promise((resolve, reject) => {
            const levelType = this.findOne(level_id);
            levelType.then(resp => {
                if(resp){
                    resolve(levelType);
                }
                else{
                    reject(new HttpException('Role not found', HttpStatus.NOT_FOUND)); 
                }
            })
        });
    }

    async updateLevelType(level_id: number, updateLevelTypeDto: UpdateLevelTypeDto): Promise<LevelType>{
        return new Promise (resolve => {
            this.update(level_id,updateLevelTypeDto).then(
                resp => {
                    const levelType = this.findOne({
                        where:{
                            id:level_id
                        }
                    });
                    resolve(levelType);
                }
            )
        })
    }
}