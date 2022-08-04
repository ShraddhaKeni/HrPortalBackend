import { HttpException, HttpStatus } from "@nestjs/common";
import { Entity, EntityRepository, Repository } from "typeorm";
import { CreateJobApplicantDto } from "./dto/create-job-applicant.dto";
import { UpdateJobApplicantDto } from "./dto/update-job-applicant.dto";
import { JobApplicant } from "./entities/job-applicant.entity";

@EntityRepository(JobApplicant)
export class JobApplicantsRepository extends Repository<JobApplicant>{

    async createJobApplicant(createJobApplicant: CreateJobApplicantDto): Promise<JobApplicant>{
        return new Promise((resolve, reject)=>{
            const jobApplicant = this.create(createJobApplicant)
            try{
                this.save(jobApplicant)
                resolve(jobApplicant)
            }catch(error){
                if(error.code === '23505'){
                    reject(new HttpException("Job Applicant already exist", HttpStatus.CONFLICT))
                }else{
                    reject(new HttpException("Error creating job applicant", HttpStatus.BAD_REQUEST))
                }
            }
        })
    }

    async findAllJobApplicants(): Promise<JobApplicant[]> {
        return new Promise((resolve, reject) => {
            const jobApplicants = this.find({
                where: {
                    //status: true
                }
            })
            jobApplicants.then(response => {
                if (response) {
                    resolve(jobApplicants)
                } else {
                    reject(new HttpException("No job applicants found", HttpStatus.NOT_FOUND))
                }
            })
        })
    }

    async findJobApplicants(id: number): Promise<JobApplicant[]> {
        return new Promise((resolve, reject) => {
            const jobApplicants = this.find({
                where: {
                    job_id: id,
                    //status: true
                }
            })
            jobApplicants.then(response => {
                if (response) {
                    resolve(jobApplicants)
                } else {
                    reject(new HttpException("No job applicants found", HttpStatus.NOT_FOUND))
                }
            })
        })
    }

    async findApplicant(id: number): Promise<JobApplicant> {
        return new Promise((resolve, reject) => {
            const Applicant = this.findOne({
                where: {
                    id: id,
                    //status: true
                }
            })
            Applicant.then(response => {
                if (response) {
                    resolve(Applicant)
                } else {
                    reject(new HttpException("No applicant details found", HttpStatus.NOT_FOUND))
                }
            })
        })
    }

    async updateJobApplicant(id: number, updateJobDto: UpdateJobApplicantDto): Promise<JobApplicant> {
        return new Promise((resolve, reject) => {
            const jobApplicant = this.update(id, updateJobDto)
            jobApplicant.then(response => {
                if (response) {
                    const findJobApplicant = this.findOne({
                        where: {
                            id: id,
                            //status: true
                        }
                    })
                    findJobApplicant.then(response => {
                        if (response) {
                            resolve(findJobApplicant)
                        } else {
                            reject(new HttpException("Job applicant not found", HttpStatus.NOT_FOUND))
                        }
                    })
                } else {
                    reject(new HttpException("Error updating job", HttpStatus.BAD_REQUEST))
                }
            })
        })
    }

    async deleteJobApplicant(id: number): Promise<JobApplicant> {
        return new Promise((resolve, reject) => {
            const jobApplicant = this.update(id, { status: false })
            jobApplicant.then(response => {
                if (response) {
                    const findJobApplicant = this.findOne({
                        where: {
                            id: id
                        }
                    })
                    findJobApplicant.then((response) => {
                        if (response) {
                            resolve(findJobApplicant)
                        } else {
                            reject(new HttpException("Job not found", HttpStatus.NOT_FOUND))
                        }
                    })
                } else {
                    reject(new HttpException("Error deleting job", HttpStatus.BAD_REQUEST))
                }
            })
        })
    }
}