import { Module } from '@nestjs/common';
import { JobApplicantsService } from './job-applicants.service';
import { JobApplicantsController } from './job-applicants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobApplicantsRepository } from './job-applicants.repository';

@Module({
  controllers: [JobApplicantsController],
  providers: [JobApplicantsService],
  imports:[
    TypeOrmModule.forFeature([JobApplicantsRepository])
  ],
})
export class JobApplicantsModule {}
