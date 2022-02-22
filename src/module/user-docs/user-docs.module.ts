import { Module } from '@nestjs/common';
import { UserDocsService } from './user-docs.service';
import { UserDocsController } from './user-docs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserDocsRepository } from './user-docs.repository';

@Module({
  controllers: [UserDocsController],
  providers: [UserDocsService],
  imports: [
    TypeOrmModule.forFeature([UserDocsRepository])
  ]
})
export class UserDocsModule {}
