import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { DocumentTypeService } from './document-type.service';
import { CreateDocumentTypeDto } from './dto/create-document-type.dto';
import { UpdateDocumentTypeDto } from './dto/update-document-type.dto';

@Controller('document-type')
export class DocumentTypeController {
  constructor(private readonly documentTypeService: DocumentTypeService) { }

  @Post('create')
  async create(@Body() createDocumentTypeDto: CreateDocumentTypeDto) {
    const data = await this.documentTypeService.create(createDocumentTypeDto)
    return {
      "statusCode": HttpStatus.CREATED,
      "message": "Data inserted successfully",
      "data": data
    }
  }




  @Get('findAll')
  async findAll() {
    var data = await this.documentTypeService.findAll();
    return {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Get('find/:id')
  async findOne(@Param('id') id: string) {
    var data = await this.documentTypeService.findOne(+id);
    return {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() updateDocumentTypeDto: UpdateDocumentTypeDto) {
    var data = await this.documentTypeService.update(+id, updateDocumentTypeDto);
    return {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": data
    }
  }

  @Delete('delete/:id')
  async remove(@Param('id') id: number) {
    const data = await this.documentTypeService.remove(+id);
    return {
      "statusCode": HttpStatus.OK,
      "message": "success",
      "data": "Document-type deleted successfully"
    }
  }

}
