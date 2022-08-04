import { HttpException, HttpStatus } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateApplicationTrackDto } from "./dto/create-application-track.dto";
import { UpdateApplicationTrackDto } from "./dto/update-application-track.dto";
import { ApplicationTrack } from "./entities/application-track.entity";

@EntityRepository(ApplicationTrack)
export class ApplicationTrackRepository extends Repository<ApplicationTrack>{

    async createJobApplication(createApplicationTrackDto: CreateApplicationTrackDto): Promise<ApplicationTrack> {
        return new Promise((resolve, reject) => {
            const jobApplication = this.create(createApplicationTrackDto)
            try {
                this.save(jobApplication)
                resolve(jobApplication)
            } catch (error) {
                if (error.code === '23505') {
                    reject(new HttpException("Job application already exist", HttpStatus.CONFLICT))
                }
                reject(new HttpException("Error creating new job application", HttpStatus.BAD_REQUEST))
            }
        })
    }

    async findAllJobApplications(): Promise<ApplicationTrack[]>{
        return new Promise((resolve, reject) => {
            const jobApplications = this.find({
                where: {
                    //status: true
                }
            })
            jobApplications.then(response => {
                if (response) {
                    resolve(jobApplications)
                } else {
                    reject(new HttpException("No job applications found", HttpStatus.NOT_FOUND))
                }
            })
        })
    }

    async findJobApplications(id: number): Promise<ApplicationTrack[]>{
        return new Promise((resolve, reject) => {
            const jobApplication = this.find({
                where: {
                    applicant_id: id,
                    //status: true
                }
            })
            jobApplication.then(response => {
                if (response) {
                    resolve(jobApplication)
                } else {
                    reject(new HttpException("No job applications found", HttpStatus.NOT_FOUND))
                }
            })
        })
    }

    async updateJobApplication(id: number, updateApplicationTrackDto: UpdateApplicationTrackDto): Promise<ApplicationTrack> {
        return new Promise((resolve, reject) => {
            const jobApplication = this.update(id, updateApplicationTrackDto)
            jobApplication.then(response => {
                if (response) {
                    const findJobApplication = this.findOne({
                        where: {
                            id: id,
                            //status: true
                        }
                    })
                    findJobApplication.then(response => {
                        if (response) {
                            resolve(findJobApplication)
                        } else {
                            reject(new HttpException("Job application not found", HttpStatus.NOT_FOUND))
                        }
                    })
                } else {
                    reject(new HttpException("Error updating job application", HttpStatus.BAD_REQUEST))
                }
            })
        })
    }

    async deleteApplicationTrack(id: number): Promise<ApplicationTrack> {
        return new Promise((resolve, reject) => {
            const jobApplication = this.update(id, { status: false })
            jobApplication.then(response => {
                if (response) {
                    const findJobApplication = this.findOne({
                        where: {
                            id: id
                        }
                    })
                    findJobApplication.then((response) => {
                        if (response) {
                            resolve(findJobApplication)
                        } else {
                            reject(new HttpException("Job application not found", HttpStatus.NOT_FOUND))
                        }
                    })
                } else {
                    reject(new HttpException("Error deleting job application", HttpStatus.BAD_REQUEST))
                }
            })
        })
    }
}