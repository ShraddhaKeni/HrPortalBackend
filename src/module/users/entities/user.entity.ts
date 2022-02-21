import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('Users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
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

  @Column()
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