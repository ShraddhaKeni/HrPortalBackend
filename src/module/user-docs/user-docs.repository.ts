import { HttpException, HttpStatus } from "@nestjs/common";
import { response } from "express";
import { EntityRepository, Repository } from "typeorm";
import { CreateUserDocDto } from "./dto/create-user-doc.dto";
import { UpdateUserDocDto } from "./dto/update-user-doc.dto";
import { UserDoc } from "./entities/user-doc.entity";

@EntityRepository(UserDoc)
export class UserDocsRepository extends Repository<UserDoc>{

    async createUserDoc(createUserDoc: CreateUserDocDto): Promise<UserDoc>{
        const createDoc = this.create(createUserDoc)
        try{
            this.save(createDoc)
            return createDoc
        }catch(error){
            throw new HttpException('Error while uploading document', HttpStatus.BAD_REQUEST)
        }
    }

    async findAllDocs(): Promise<UserDoc[]>{
        return new Promise((resolve, reject)=>{
            const docs = this.find({
                where:{
                    status: true
                }
            })
            docs.then(response => {
                if(response){
                    resolve(docs)
                }else{
                    reject(new HttpException("Error getting documents", HttpStatus.NOT_FOUND))
                }
            })
        })
    }

    async findUserDocs(id: number): Promise<UserDoc[]>{
        return new Promise((resolve, reject)=>{
            const docs = this.find({
                where:{
                    id: id,
                    status: true
                }
            })
            docs.then(response => {
                if(response){
                    resolve(docs)
                }else{
                    reject(new HttpException("Error getting user documents", HttpStatus.NOT_FOUND))
                }
            })
        })
    }

    async updateUserDoc(id: number, updateUserDoc: UpdateUserDocDto): Promise<UserDoc>{
        return new Promise((resolve, reject)=>{
            const getDoc = this.findOne({
                where:{
                    user_id: id,
                    doc_type_id: updateUserDoc.doc_type_id
                }
            })
            getDoc.then(response => {
                if(response){
                    this.update(response.id, {status:false})
                }else{
                    reject(new HttpException("User documents not found", HttpStatus.NOT_FOUND))
                }
            })
            const updateDoc = this.create(updateUserDoc)
            try{
                this.save(updateDoc)
                resolve(updateDoc)
            }catch(error){
                reject(new HttpException("Error while uploading document", HttpStatus.NOT_FOUND))
            }
        })
    }

    async deleteUserDoc(id:number):Promise<UserDoc>{
        return new Promise((resolve, reject) => {
            const doc = this.update(id, { status: false })
            doc.then(response => {
                if (response) {
                    const findDoc = this.findOne({
                        where: {
                            id: id
                        }
                    })
                    findDoc.then((response) => {
                        if (response) {
                            resolve(findDoc)
                        } else {
                            reject(new HttpException("User document not found", HttpStatus.NOT_FOUND))
                        }
                    })
                } else {
                    reject(new HttpException("Error deleting user document", HttpStatus.BAD_REQUEST))
                }
            })
        })
    }

}