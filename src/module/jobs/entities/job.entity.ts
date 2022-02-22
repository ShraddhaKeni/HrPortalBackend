import { Companies } from "src/module/companies/entities/company.entity";
import { Department } from "src/module/departments/entities/department.entity";
import { Employee } from "src/module/employees/entities/employee.entity";
import { Role } from "src/module/roles/entities/role.entity";
import { text } from "stream/consumers";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { deprecate } from "util";

@Entity('Jobs')
export class Job {

    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(()=> Companies, (comp: Companies) => comp.id)
    @JoinColumn({name: 'comp_id'})
    comp_id: string

    @ManyToOne(() => Department, (dept: Department) => dept.id)
    @JoinColumn({name: 'dept_id'})
    dept_id: number

    @Column()
    title: string

    @ManyToOne(()=> Role, (role: Role) => role.id)
    @JoinColumn({name: 'role_id'})
    role_id: number

    @Column({type: "text"})
    description: string

    @Column()
    salary: string

    @ManyToOne(()=> Employee, (emp: Employee) => emp.id)
    @JoinColumn({name: 'raised_by_emp'})
    raised_by_emp: string

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
