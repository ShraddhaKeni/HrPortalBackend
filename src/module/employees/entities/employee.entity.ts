import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Employees')
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    desig_id: number;

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

    @Column()
    signature: string

    @Column({ length: 10 })
    emergency_no1: string;
    
    @Column({ length: 10 })
    emergency_no2: string;

    @Column({ length: 10 })
    emp_code: string
}
