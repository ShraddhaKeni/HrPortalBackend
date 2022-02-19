import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('DocumentType')
export class DocumentType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    name: string;

    @Column({
        enum: [true, false],
        default: true

    })
    status: boolean;
}
