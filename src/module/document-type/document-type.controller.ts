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
    const data = await this.documentTypeService.create(createDocumentTypeDto);
    // const created_data = createDocumentTypeDto
    var data_return = {
      "statusCode": HttpStatus.CREATED,
      "message": "Data inserted successfully",
      "data": [data]
    }
    return data_return
  }

  @Get('findAll')
  async findAll() {
    var data = await this.documentTypeService.findAll();
    const data_return = {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": [data]
    }
    return data_return
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    var data = await this.documentTypeService.findOne(+id);
    const data_return = {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": [data]
    }
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateDocumentTypeDto: UpdateDocumentTypeDto) {
    var data = await this.documentTypeService.update(+id, updateDocumentTypeDto);
    const data_return = {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": [data]
    }
    return data_return
  }

}
