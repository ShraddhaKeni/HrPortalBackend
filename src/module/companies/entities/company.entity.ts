import { City } from "src/module/cities/entities/city.entity";
import { Country } from "src/module/countries/entities/country.entity";
import { State } from "src/module/states/entities/state.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Companies')
export class Companies {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ unique: true })
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

    @Column()
    pincode: number;

    @Column({nullable: true})
    website: string;

    @Column({nullable: true})
    email: string;

    @Column({nullable: true})
    contact_person: string;

    @Column({nullable: true})
    contact_number: string;

    @Column({nullable: true})
    pancard_number: string;

    @Column({nullable: true})
    gst_number: string;

    @Column({nullable: true})
    cin_number: string;

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
