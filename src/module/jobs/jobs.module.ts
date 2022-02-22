import { Module } from '@nestjs/common';
import { JobsService } from './jobs.service';
import { JobsController } from './jobs.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobsRepository } from './jobs.repository';

@Module({
  controllers: [JobsController],
  providers: [JobsService],
  imports: [
    TypeOrmModule.forFeature([JobsRepository])
  ],
})
export class JobsModule {}
