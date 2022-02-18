import { Employee } from "src/module/employees/entities/employee.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('ReportingTo')
export class ReportingTo {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Employee, (empl: Employee) => empl.id)
    emp_id: string;

    @ManyToOne(() => Employee, (reporting_emp: Employee) => reporting_emp.id)
    reporting_emp_id: string;

    @Column({
        enum: [true,false],
        default: true
    })
    status: boolean
}
