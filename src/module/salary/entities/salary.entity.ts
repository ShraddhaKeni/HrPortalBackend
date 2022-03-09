import { Employee } from "src/module/employees/entities/employee.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Salary')
export class Salary {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @ManyToOne(() => Employee, (emp: Employee) => emp.id)
    @JoinColumn({ name: 'emp_id' })
    emp_id: string;

    @Column("float")
    salary: number;

    @Column({
        enum: [true, false],
        default: true
    })
    status: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
