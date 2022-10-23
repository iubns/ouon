import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user";

export enum InOutType {
    IN = 'in',
    OUT = 'out',
}

@Entity()
export class InOutInfo {
    @PrimaryGeneratedColumn()
    id: number

    @ManyToOne(() => User, (user) => user.id)
    userId

    @Column()
    time: string

    @Column()
    inOutType: InOutType

    @Column()
    position: string
}