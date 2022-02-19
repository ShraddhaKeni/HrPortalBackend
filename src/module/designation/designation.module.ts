import { Module } from '@nestjs/common';
import { DesignationService } from './designation.service';
import { DesignationController } from './designation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DesignationRepository } from './designation.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([DesignationRepository])
  ],
  controllers: [DesignationController],
  providers: [DesignationService]
})
export class DesignationModule { }
