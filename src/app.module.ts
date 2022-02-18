import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './module/users/users.module';
import { DesignationModule } from './module/designation/designation.module';
import { EmployeesModule } from './module/employees/employees.module';
import { ReportingToModule } from './module/reporting-to/reporting-to.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    DatabaseModule,
    DesignationModule,
    EmployeesModule,
    ReportingToModule,
  ],
})
export class AppModule { }