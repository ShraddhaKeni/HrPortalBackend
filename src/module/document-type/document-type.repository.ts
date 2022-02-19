import { HttpException, HttpStatus } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateDocumentTypeDto } from "./dto/create-document-type.dto";
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
}