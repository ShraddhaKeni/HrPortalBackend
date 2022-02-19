import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('Countries')
export class Country {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column({
        enum: [true,false],
        default: true
    })
    status: boolean;
}
