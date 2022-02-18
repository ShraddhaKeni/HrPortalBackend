import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesRepository } from './employees.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeesRepository])],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
