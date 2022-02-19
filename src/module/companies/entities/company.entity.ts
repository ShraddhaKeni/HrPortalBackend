import { City } from "src/module/cities/entities/city.entity";
import { Country } from "src/module/countries/entities/country.entity";
import { State } from "src/module/states/entities/state.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('Companies')
export class Company {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ type: "text"})
    address: string;

    @OneToOne(() => Country, (country: Country) => country.id)
    @JoinColumn({name: 'country_id'})
    country_id: number;

    @OneToOne(() => State, (st: State) => st.id)
    @JoinColumn({name: 'state_id'})
    state_id: number;

    @OneToOne(() => City, (ct: City) => ct.id)
    @JoinColumn({name: 'city_id'})
    city_id: number;
}
