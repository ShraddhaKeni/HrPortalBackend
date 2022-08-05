import { response } from "express";
import { resolve } from "path/posix";
import { HttpException, HttpStatus } from "@nestjs/common";
import { DeepPartial, EntityRepository, Repository } from "typeorm";
import { offBoardDto } from "./dto/offboarddto.dto";
import { offboard } from "./entities/offboard.entity";

@EntityRepository(offboard)
export class OffBoardRepository extends Repository<offboard>
{
    async createOffboard(offboaddto:offBoardDto):Promise<offboard>
    {
        return new Promise((resolve,reject)=>{
            console.log(offboaddto)
            const createData = this.create(offboaddto)
            try
            {
                
                this.save(createData)
                resolve(createData);
            }
            catch(error)
            {
                reject(new HttpException("Error creating Offboard", HttpStatus.BAD_REQUEST));
            }
        })
    }

    async getData():Promise<offboard[]> //pass in array as function will return array of objects
    {
        return new Promise((resolve,reject)=>{
            const data = this.find({
                where:{
                    //conditions
                }
            })
            data.then(response=>{
                if(response)
                {
                    resolve(data)
                }
                else{
                    reject(new HttpException("Error cannot find any records", HttpStatus.BAD_REQUEST));
                }
            })
        })
    }
        
    
}