import { Module } from '@nestjs/common';
import { SalaryService } from './salary.service';
import { SalaryController } from './salary.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalaryRepository } from './salary.repository';

@Module({
  controllers: [SalaryController],
  providers: [SalaryService],
  imports: [
    TypeOrmModule.forFeature([SalaryRepository])
  ]
})
export class SalaryModule { }
