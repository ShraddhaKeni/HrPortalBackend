import { Module } from '@nestjs/common';
import { UserDocsService } from './user-docs.service';
import { UserDocsController } from './user-docs.controller';

@Module({
  controllers: [UserDocsController],
  providers: [UserDocsService]
})
export class UserDocsModule {}
