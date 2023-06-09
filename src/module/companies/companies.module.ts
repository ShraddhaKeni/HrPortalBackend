import { Module } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { CompaniesController } from './companies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompaniesRepository } from './companies.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CompaniesRepository])],
  controllers: [CompaniesController],
  providers: [CompaniesService]
})
export class CompaniesModule {}
