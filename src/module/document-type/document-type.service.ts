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

  async findAll() {
    return this.documentTypeRepository.findAll()
  }

  async findOne(id: number) {
    return this.documentTypeRepository.findDocumentType(id)
  }

  async update(id: number, updateDocumentTypeDto: UpdateDocumentTypeDto) {
    return this.documentTypeRepository.updateDocumentType(id, updateDocumentTypeDto)
  }

  remove(id: number) {
    return this.documentTypeRepository.deleteDocumentType(id)
  }
}
