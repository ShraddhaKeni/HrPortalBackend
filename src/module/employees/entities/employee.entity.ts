import { Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Employees')
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    id: string;
}
