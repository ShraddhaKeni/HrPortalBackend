import { Employee } from 'src/module/employees/entities/employee.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, JoinColumn, OneToOne } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => Employee, (empl: Employee) => empl.id, { nullable: true })
  @JoinColumn({name: 'emp_id'})
  emp_id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  token: string;

  @Column({
    enum: [true,false],
    default: true
  })
  status: boolean

  @CreateDateColumn()
  createdAt: Date;
  
  @UpdateDateColumn()
  updatedAt: Date;

}