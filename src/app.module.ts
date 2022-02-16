import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { configValidationSchema } from './config.schema';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    /* ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.NODE_ENV}`]
    }), */
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    DatabaseModule,
  ],
})
export class AppModule {}