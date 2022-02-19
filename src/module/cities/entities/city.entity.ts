import { State } from "src/module/states/entities/state.entity";
import { PrimaryGeneratedColumn, OneToOne, JoinColumn, Column, Entity } from "typeorm";

@Entity('Cities')
export class City {
    @PrimaryGeneratedColumn()
    id: string;

    @OneToOne(() => State, (st: State) => st.id)
    @JoinColumn({name: 'state_id'})
    state_id: number;

    @Column()
    name: string;

    @Column({
        enum: [true,false],
        default: true
    })
    status: boolean;
}