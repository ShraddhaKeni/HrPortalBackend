import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './module/users/users.module';
import { DepartmentsModule } from './module/departments/departments.module';
import { RolesModule } from './module/roles/roles.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    DatabaseModule,
    DepartmentsModule,
    RolesModule
  ],
})
export class AppModule {}