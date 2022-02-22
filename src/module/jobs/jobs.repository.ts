import { HttpException, HttpStatus } from "@nestjs/common";
import { response } from "express";
import { resolve } from "path/posix";
import { EntityRepository, Repository } from "typeorm";
import { CreateJobDto } from "./dto/create-job.dto";
import { UpdateJobDto } from "./dto/update-job.dto";
import { Job } from "./entities/job.entity";

@EntityRepository(Job)
export class JobsRepository extends Repository<Job>{

    async createJob(createJobDto: CreateJobDto): Promise<Job> {
        return new Promise((resolve, reject) => {
            const job = this.create(createJobDto)
            try {
                this.save(job)
                resolve(job)
            } catch (error) {
                if (error.code === '23505') {
                    reject(new HttpException("Job already exist", HttpStatus.CONFLICT))
                }
                reject(new HttpException("Error creating new job", HttpStatus.BAD_REQUEST))
            }
        })
    }

    async findAllJobs(): Promise<Job[]> {
        return new Promise((resolve, reject) => {
            const jobs = this.find({
                where: {
                    status: true
                }
            })
            jobs.then(response => {
                if (response) {
                    resolve(jobs)
                } else {
                    reject(new HttpException("No jobs found", HttpStatus.NOT_FOUND))
                }
            })
        })
    }

    async findJob(id: number): Promise<Job> {
        return new Promise((resolve, reject) => {
            const job = this.findOne({
                where: {
                    id: id,
                    status: true
                }
            })
            job.then(response => {
                if (response) {
                    resolve(job)
                } else {
                    reject(new HttpException("No job found", HttpStatus.NOT_FOUND))
                }
            })
        })
    }

    async updateJob(id: number, updateJobDto: UpdateJobDto): Promise<Job> {
        return new Promise((resolve, reject) => {
            const job = this.update(id, updateJobDto)
            job.then(response => {
                if (response) {
                    const findJob = this.findOne({
                        where: {
                            id: id,
                            status: true
                        }
                    })
                    findJob.then(response => {
                        if (response) {
                            resolve(findJob)
                        } else {
                            reject(new HttpException("Job not found", HttpStatus.NOT_FOUND))
                        }
                    })
                } else {
                    reject(new HttpException("Error updating job", HttpStatus.BAD_REQUEST))
                }
            })
        })
    }

    async deleteJob(id: number): Promise<Job> {
        return new Promise((resolve, reject) => {
            const job = this.update(id, { status: false })
            job.then(response => {
                if (response) {
                    const findJob = this.findOne({
                        where: {
                            id: id
                        }
                    })
                    findJob.then((response) => {
                        if (response) {
                            resolve(findJob)
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