import { Module } from '@nestjs/common';
import { DocumentTypeService } from './document-type.service';
import { DocumentTypeController } from './document-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentTypeRepository } from './document-type.repository';

@Module({
  controllers: [DocumentTypeController],
  providers: [DocumentTypeService],
  imports:[
    TypeOrmModule.forFeature([DocumentTypeRepository])
  ]
})
export class DocumentTypeModule {}
