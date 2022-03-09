import { Job } from "src/module/jobs/entities/job.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('JobApplicant')
export class JobApplicant {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @ManyToOne(() => Job, (job: Job) => job.id)
    @JoinColumn({ name: 'job_id' })
    job_id: number

    @Column()
    name: string

    @Column()
    contact_no: string

    @Column()
    email_id: string

    @Column()
    cv: string

    @Column({
        enum: [true, false],
        default: true
    })
    status: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
