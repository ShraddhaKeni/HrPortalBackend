import { Employee } from "src/module/employees/entities/employee.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('ReportingTo')
export class ReportingTo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @OneToOne(() => Employee, (empl: Employee) => empl.id)
    @JoinColumn({name: 'emp_id'})
    emp_id: string;

    @Column()
    @ManyToOne(() => Employee, (reporting_emp: Employee) => reporting_emp.id)
    @JoinColumn({name: 'reporting_emp_id'})
    reporting_emp_id: string;

    @Column({
        enum: [true,false],
        default: true
    })
    status: boolean
}
