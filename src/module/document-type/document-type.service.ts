import { Injectable } from '@nestjs/common';
import { DocumentTypeRepository } from './document-type.repository';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';

@Injectable()
export class DocumentTypeService {
  constructor(private readonly documentTypeRepository: DocumentTypeRepository) { }
  async create(createDocumentTypeDto: CreateDocumentTypeDto) {
    return this.documentTypeRepository.createDocumentType(createDocumentTypeDto)
  }

  findAll() {
    return `This action returns all documentType`;
  }

  findOne(id: number) {
    return `This action returns a #${id} documentType`;
  }

  update(id: number, updateDocumentTypeDto: UpdateDocumentTypeDto) {
    return `This action updates a #${id} documentType`;
  }

  remove(id: number) {
    return `This action removes a #${id} documentType`;
  }
}
