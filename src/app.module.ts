import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './module/users/users.module';
import { DesignationModule } from './module/designation/designation.module';
import { EmployeesModule } from './module/employees/employees.module';
import { ReportingToModule } from './module/reporting-to/reporting-to.module';
import { SalaryModule } from './module/salary/salary.module';
import { CompaniesModule } from './module/companies/companies.module';
import { CountriesModule } from './module/countries/countries.module';
import { StatesModule } from './module/states/states.module';
import { CitiesModule } from './module/cities/cities.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    CountriesModule,
    StatesModule,
    CitiesModule,
    UsersModule,
    DatabaseModule,
    DesignationModule,
    EmployeesModule,
    ReportingToModule,
    SalaryModule,
    CompaniesModule
  ],
})
export class AppModule { }