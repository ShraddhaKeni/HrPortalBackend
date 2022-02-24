import { Employee } from "src/module/employees/entities/employee.entity";
import { JobApplicant } from "src/module/job-applicants/entities/job-applicant.entity";
import { Job } from "src/module/jobs/entities/job.entity";
import { LevelType } from "src/module/level-types/entities/level-type.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('ApplicationTrack')
export class ApplicationTrack {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=> Job, (job: Job)=>job.id)
    @JoinColumn({name: 'job_id'})
    job_id: number

    @ManyToOne(()=>JobApplicant, (jobApp: JobApplicant) => jobApp.id)
    @JoinColumn({name: 'applicant_id'})
    applicant_id: number

    @Column({type: "text"})
    comment: string

    @ManyToOne(()=> Employee,(emp: Employee) => emp.id)
    @JoinColumn({name: 'emp_id'})
    emp_id: string

    @ManyToOne(()=> LevelType, (level: LevelType) => level.id)
    @JoinColumn({name: 'level'})
    level: number

    @Column({
        enum:[true, false],
        default: true
    })
    status: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}
