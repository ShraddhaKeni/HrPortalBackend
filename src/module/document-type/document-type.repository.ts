import { HttpException, HttpStatus } from "@nestjs/common";
import { rejects } from "assert";
import { response } from "express";
import { resolve } from "path/posix";
import { EntityRepository, Repository } from "typeorm";
import { CreateDocumentTypeDto } from "./dto/create-document-type.dto";
import { UpdateDocumentTypeDto } from "./dto/update-document-type.dto";
import { DocumentType } from "./entities/document-type.entity";

@EntityRepository(DocumentType)
export class DocumentTypeRepository extends Repository<DocumentType>{
    async createDocumentType(CreateDocumentTypeDto: CreateDocumentTypeDto): Promise<DocumentType> {
        const doc_type = this.create(CreateDocumentTypeDto)
        try{
            await this.save(doc_type)
            return doc_type
        }catch(error){
            if(error.code === '23505'){
                throw new HttpException("Document type name is already present", HttpStatus.CONFLICT)
            }
            throw new HttpException("Data not found", HttpStatus.NOT_FOUND)
        }
        
    }

    async findAll(): Promise<DocumentType[]>{
        return new Promise((resolve, reject) => {
            const doc_type = this.find()
            doc_type.then(response => {
                if(response){
                    resolve(doc_type)
                }else{
                    reject(new HttpException("no document types found", HttpStatus.NOT_FOUND))
                }
            })
        });
    }

    async findDocumentType(id: number): Promise<DocumentType>{
        return new Promise((resolve, reject) => {
            const documentType = this.findOne(id)
            documentType.then(response=>{
                if(response){
                    resolve(documentType)
                }else{
                    reject(new HttpException("No document type found", HttpStatus.NOT_FOUND))
                }
            })
        })
    }

    async updateDocumentType(id: number, updateDocumentTypeDto: UpdateDocumentTypeDto): Promise<DocumentType>{
        return new Promise((resolve, reject)=>{
            this.update(id, updateDocumentTypeDto).then(response => {
                const updateData = this.findOne({
                    where: {
                        id:id
                    }
                });
                updateData.then(response=>{
                    if(response){
                        resolve(updateData)
                    }else{
                        reject(new HttpException("Document type not found", HttpStatus.NOT_FOUND))
                    }
                });
            });
        });
    }
}