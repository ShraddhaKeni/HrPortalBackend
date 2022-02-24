import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('LevelTypes')
export class LevelType {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @Column({default:true})
    status: boolean;
}
