import { Companies } from "src/module/companies/entities/company.entity";
import { Department } from "src/module/departments/entities/department.entity";
import { Designation } from "src/module/designation/entities/designation.entity";
import { User } from "src/module/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Employees')
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    @ManyToOne(() => Companies, (comp: Companies) => comp.id)
    @JoinColumn({name: 'comp_id'})
    comp_id: string;

    @Column()
    @OneToOne(() => User, (usr: User) => usr.id, { nullable: true })
    @JoinColumn({name: 'user_id'})
    user_id: string;

    @Column()
    @ManyToOne(() => Designation, (desig: Designation) => desig.id)
    @JoinColumn({name: 'desig_id'})
    desig_id: number;

    @Column()
    @ManyToOne(() => Department, (dept: Department) => dept.id)
    @JoinColumn({name: 'dept_id'})
    dept_id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    doj: string;

    @Column({ nullable: true })
    signature: string;

    @Column({ length: 10 })
    emp_code: string

    @Column({
        enum: [true,false],
        default: true
    })
    status: boolean;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
}
