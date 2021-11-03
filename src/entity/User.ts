import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, BaseEntity} from "typeorm";
import { v4 as uuid } from 'uuid';

@Entity("users")
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "uuid"})
    uuid: string

    @Column()
    name: string;

    @Column()
    email: string;


    @Column()
    role: string;
    

    @BeforeInsert()
        createUuid(){
            this.uuid = uuid()
        }
}
