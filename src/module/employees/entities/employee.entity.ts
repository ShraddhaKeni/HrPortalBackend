import { Company } from "src/module/companies/entities/company.entity";
import { Designation } from "src/module/designation/entities/designation.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Employees')
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @OneToOne(() => Company, (comp: Company) => comp.id)
    @JoinColumn({name: 'comp_id'})
    comp_id: string;

    @OneToOne(() => Designation, (desig: Designation) => desig.id)
    @JoinColumn({name: 'desig_id'})
    desig_id: number;

    @Column()
    role_id: number;

    @Column()
    dept_id: number;

    @Column({ unique: true })
    official_email: string;

    @Column({ unique: true, length: 10 })
    contact_no: string;

    @Column({ unique: true })
    personal_email: string;

    @Column({
        enum: [true,false],
        default: true
    })
    status: boolean

    @Column()
    dob: string

    @Column()
    doj: string

    @Column()
    profile_pic: string

    @Column({ nullable: true })
    signature: string

    @Column({ length: 10, nullable: true })
    emergency_no1: string;
    
    @Column({ length: 10, nullable: true })
    emergency_no2: string;

    @Column({ length: 10 })
    emp_code: string
}
