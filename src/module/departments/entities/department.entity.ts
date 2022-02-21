import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Departments')
export class Department {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    name: string;

    @Column({default: true})
    status: boolean;
}
