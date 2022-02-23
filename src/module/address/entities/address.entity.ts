import { City } from "src/module/cities/entities/city.entity";
import { Country } from "src/module/countries/entities/country.entity";
import { State } from "src/module/states/entities/state.entity";
import { User } from "src/module/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export type AddressType = "Residential" | "Permanent"

@Entity('Address')
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => User, (user: User) => user.id)
    @JoinColumn({name: "user_id"})
    user_id: string;

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

    @Column()
    pincode: string;

    @Column({
        type: 'enum',
        enum: ['Residential','Permanent'],
        default: "Permanent"
    })
    type: AddressType;

    @Column({
        enum: [true,false],
        default: true
    })
    status: boolean;

    @CreateDateColumn()
    createdAt: Date;
    
    @UpdateDateColumn()
    updatedAt: Date;
}
