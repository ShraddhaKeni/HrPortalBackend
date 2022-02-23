import { HttpException, HttpStatus } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateDocumentTypeDto } from "./dto/create-document-type.dto";
import { UpdateDocumentTypeDto } from "./dto/update-document-type.dto";
import { DocumentType } from "./entities/document-type.entity";

@EntityRepository(DocumentType)
export class DocumentTypeRepository extends Repository<DocumentType>{
    async createDocumentType(CreateDocumentTypeDto: CreateDocumentTypeDto): Promise<DocumentType> {
        return new Promise((resolve, reject) => {
            const doc_type = this.create(CreateDocumentTypeDto)
            try {
                this.save(doc_type)
                resolve(doc_type)
            } catch (error) {
                if (error.code === '23505') {
                    reject(new HttpException("Document type name is already present", HttpStatus.CONFLICT))
                }
                reject(new HttpException("Data not found", HttpStatus.NOT_FOUND))
            }
        })
    }

    async findAll(): Promise<DocumentType[]> {
        return new Promise((resolve, reject) => {
            const doc_type = this.find()
            doc_type.then(response => {
                if (response) {
                    resolve(doc_type)
                } else {
                    reject(new HttpException("no document types found", HttpStatus.NOT_FOUND))
                }
            })
        });
    }

    async findDocumentType(id: number): Promise<DocumentType> {
        return new Promise((resolve, reject) => {
            const documentType = this.findOne(id)
            documentType.then(response => {
                if (response) {
                    resolve(documentType)
                } else {
                    reject(new HttpException("No document type found", HttpStatus.NOT_FOUND))
                }
            })
        })
    }

    async updateDocumentType(id: number, updateDocumentTypeDto: UpdateDocumentTypeDto): Promise<DocumentType> {
        return new Promise((resolve, reject) => {
            this.update(id, updateDocumentTypeDto).then(response => {
                const updateData = this.findOne({
                    where: {
                        id: id
                    }
                });
                updateData.then(response => {
                    if (response) {
                        resolve(updateData)
                    } else {
                        reject(new HttpException("Document type not found", HttpStatus.NOT_FOUND))
                    }
                });
            });
        });
    }

    async deleteDocumentType(id: number): Promise<DocumentType> {
        return new Promise((resolve, reject) => {
            this.update(id, { status: false }).then(
                response => {
                    if (response) {
                        const doc = this.findOne({
                            where: {
                                id: id
                            }
                        })
                        doc.then(response => {
                            if (response) {
                                resolve(doc)
                            } else {
                                reject(new HttpException("Document type not found", HttpStatus.NOT_FOUND))
                            }
                        })
                    } else {
                        reject(new HttpException("Error deleting document type", HttpStatus.BAD_REQUEST))
                    }
                }
            )
        })
    }
}