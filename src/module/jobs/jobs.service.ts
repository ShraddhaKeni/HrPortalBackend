import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { JobsRepository } from './jobs.repository';

@Injectable()
export class JobsService {

  constructor(private readonly jobsRepository: JobsRepository){}

  create(createJobDto: CreateJobDto) {
    return this.jobsRepository.createJob(createJobDto)
  }

  findAll() {
    return this.jobsRepository.findAllJobs()
  }

  findOne(id: number) {
    return this.jobsRepository.findJob(id)
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return this.jobsRepository.updateJob(id, updateJobDto)
  }

  remove(id: number) {
    return this.jobsRepository.deleteJob(id)
  }
}
