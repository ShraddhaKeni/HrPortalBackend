import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './module/users/users.module';
import { DesignationModule } from './module/designation/designation.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    UsersModule,
    DatabaseModule,
    DesignationModule
  ],
})
export class AppModule { }