import { City } from "src/module/cities/entities/city.entity";
import { Country } from "src/module/countries/entities/country.entity";
import { State } from "src/module/states/entities/state.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Companies')
export class Companies {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ type: "text"})
    address: string;

    @ManyToOne(() => Country, (country: Country) => country.id)
    @JoinColumn({name: 'country_id'})
    country_id: number;

    @ManyToOne(() => State, (st: State) => st.id)
    @JoinColumn({name: 'state_id'})
    state_id: number;

    @ManyToOne(() => City, (ct: City) => ct.id)
    @JoinColumn({name: 'city_id'})
    city_id: number;
}
