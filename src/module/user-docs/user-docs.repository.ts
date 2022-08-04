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
                    //status: true
                }
            })
            docs.then(response => {
                if(response.length > 0){
                    resolve(docs)
                }else{
                    reject(new HttpException("Error getting documents", HttpStatus.NOT_FOUND))
                }
            })
        })
    }

    async findUserDocs(id: string): Promise<UserDoc[]>{
        return new Promise((resolve, reject)=>{
            const docs = this.find({
                where:{
                    user_id: id,
                    status: true
                }
            })
            docs.then(response => { 
                if(response.length > 0){
                    resolve(docs)
                }else{
                    reject(new HttpException("Error getting user documents", HttpStatus.NOT_FOUND))
                }
            })
        })
    }

    async updateUserDoc(id: string,doc_id:number, updateUserDoc: UpdateUserDocDto): Promise<UserDoc>{
        return new Promise((resolve, reject)=>{
          
            const updateD = this.update(doc_id,updateUserDoc)
            updateD.then(response=>{
                if(response)
                {
                const findDoc = this.findOne({
                    where:{
                        user_id: id,
                        id: doc_id
                    }
                })
                findDoc.then(response=>{
                    if(response)
                    {
                        this.update(doc_id,updateUserDoc)
                        resolve(findDoc)
                    }
                    else
                    {
                        reject(new HttpException("User documents not found", HttpStatus.NOT_FOUND))
                    }
                })
                }
                else{
                    reject(new HttpException("Error while uploading document", HttpStatus.NOT_FOUND)) 
                }
            })
           
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

    async docUpdate(updateUserDoc: UpdateUserDocDto):Promise<UserDoc>
    {
        return new Promise((resolve, reject) => {
            const update = this.update(updateUserDoc.id,updateUserDoc)
            const doc_id = updateUserDoc.id;
            update.then(response=>{
                if(response)
                {
                    const findDoc = this.findOne({
                        where:
                            {
                                id:doc_id
                            }
                    })
                    findDoc.then(response=>{
                        if(response)
                        {
                            this.update(doc_id,updateUserDoc)
                            resolve(findDoc)
                        }
                        else
                        {
                            reject(new HttpException("User documents not found", HttpStatus.NOT_FOUND))
                        }
                    })
                }
                else
                {
                    reject(new HttpException("Error Updating documents", HttpStatus.NOT_FOUND))
                }
            })
        })    
    }

}