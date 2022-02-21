import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Roles')
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @Column({default:true})
    status: boolean;
}
