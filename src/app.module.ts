import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './module/users/users.module';
import { DepartmentsModule } from './module/departments/departments.module';
import { RolesModule } from './module/roles/roles.module';
import { DesignationModule } from './module/designation/designation.module';
import { EmployeesModule } from './module/employees/employees.module';
import { ReportingToModule } from './module/reporting-to/reporting-to.module';
import { SalaryModule } from './module/salary/salary.module';
import { DocumentTypeModule } from './module/document-type/document-type.module';
import { CompaniesModule } from './module/companies/companies.module';
import { CountriesModule } from './module/countries/countries.module';
import { StatesModule } from './module/states/states.module';
import { CitiesModule } from './module/cities/cities.module';
import { UserDocsModule } from './module/user-docs/user-docs.module';
import { MulterModule } from '@nestjs/platform-express';
import { JobsModule } from './module/jobs/jobs.module';
import { LevelTypesModule } from './module/level-types/level-types.module';
import { JobApplicantsModule } from './module/job-applicants/job-applicants.module';
import { ApplicationTrackModule } from './module/application-track/application-track.module';
import { AddressModule } from './module/address/address.module';
import { OffboardModule } from './module/offboard/offboard.module';
import {AuthsModule} from './auths/auth.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    CompaniesModule,
    AuthModule,
    CountriesModule,
    StatesModule,
    CitiesModule,
    UsersModule,
    DatabaseModule,
    DepartmentsModule,
    RolesModule,
    DesignationModule,
    ReportingToModule,
    SalaryModule,
    DocumentTypeModule,
    EmployeesModule,
    UserDocsModule,
    MulterModule.register({ dest: './src/docs' }),
    JobsModule,
    LevelTypesModule,
    JobApplicantsModule,
    ApplicationTrackModule,
    AddressModule,
    OffboardModule,
    AuthsModule
  ],
})
export class AppModule { }