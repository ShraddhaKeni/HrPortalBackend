import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { json } from 'stream/consumers';
import { DocumentTypeService } from './document-type.service';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';

@Controller('document-type')
export class DocumentTypeController {
  constructor(private readonly documentTypeService: DocumentTypeService) { }

  @Post('create')
  async create(@Body() createDocumentTypeDto: CreateDocumentTypeDto) {
    const created_data = await this.documentTypeService.create(createDocumentTypeDto);
    // const created_data = createDocumentTypeDto
    var data = {
      "statusCode": HttpStatus.CREATED,
      "message": "Data inserted successfully",
      "data": [created_data]
    }
    return data
  }

  @Get()
  findAll() {
    return this.documentTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.documentTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDocumentTypeDto: UpdateDocumentTypeDto) {
    return this.documentTypeService.update(+id, updateDocumentTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.documentTypeService.remove(+id);
  }
}
