
import { User } from "src/module/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('offboard')
export class offboard{

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    @ManyToOne(()=>User,(emp:User)=>emp.id)
    @JoinColumn({name:'emp_id'})
    emp_id:string;

    @Column()
    offboard_date: string;

    @Column()
    offBoard_reason:string;

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}
