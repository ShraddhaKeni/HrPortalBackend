import { User } from "src/module/users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('UserDoc')
export class UserDoc {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    doc_type_id: number

    @Column()
    doc_path: string


    @Column()
    @ManyToOne(() => User, (user: User) => user.id)
    @JoinColumn({name: "user_id"})
    user_id:string

    @Column({
        enum:[true, false],
        default: true
    })
    status: boolean

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date
}




