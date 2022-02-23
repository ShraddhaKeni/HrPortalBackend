import { Injectable } from '@nestjs/common';
import { CreateJobApplicantDto } from './dto/create-job-applicant.dto';
import { UpdateJobApplicantDto } from './dto/update-job-applicant.dto';
import { JobApplicantsRepository } from './job-applicants.repository';

@Injectable()
export class JobApplicantsService {
  constructor(private readonly jobApplicantsRepository: JobApplicantsRepository){}

  create(createJobApplicantDto: CreateJobApplicantDto) {
    return this.jobApplicantsRepository.createJobApplicant(createJobApplicantDto)
  }

  findAll() {
    return this.jobApplicantsRepository.findAllJobApplicants()
  }

  findJobApplicants(id: number) {
    return this.jobApplicantsRepository.findJobApplicants(id)
  }

  findApplicant(id: number) {
    return this.jobApplicantsRepository.findApplicant(id)
  }

  update(id: number, updateJobApplicantDto: UpdateJobApplicantDto) {
    return this.jobApplicantsRepository.updateJobApplicant(id, updateJobApplicantDto)
  }

  remove(id: number) {
    return this.jobApplicantsRepository.deleteJobApplicant(id)
  }
}
