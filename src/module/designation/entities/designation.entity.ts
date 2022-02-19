import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('designation')
export class Designation {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({ unique: true })
    name: string;

    @Column({enum: [true, false], default: true})
    status: boolean;

}
