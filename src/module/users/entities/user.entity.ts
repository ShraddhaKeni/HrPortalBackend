import { Role } from 'src/module/roles/entities/role.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, (role: Role) => role.id)
  @JoinColumn({name: 'role_id'})
  role_id: number;

  @Column()
  dob: string;

  @Column({ unique: true, length: 10 })
  contact_no: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  profile_pic: string;

  @Column({ length: 10, nullable: true })
  emergency_no1: string;
  
  @Column({ length: 10, nullable: true })
  emergency_no2: string;

  @Column({ nullable: true })
  token: string;

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