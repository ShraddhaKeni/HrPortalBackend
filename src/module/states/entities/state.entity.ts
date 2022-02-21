import { Country } from "src/module/countries/entities/country.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('States')
export class State {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(() => Country, (country: Country) => country.id)
    @JoinColumn({name: 'country_id'})
    country_id: number;

    @Column()
    name: string;

    @Column({
        enum: [true,false],
        default: true
    })
    status: boolean;
}
