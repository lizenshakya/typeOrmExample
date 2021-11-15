import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, BaseEntity} from "typeorm";
import { v4 as uuid } from 'uuid';
import { BaseRecord } from "./BaseRecord";

@Entity("products")
export class Product extends BaseRecord {
    @PrimaryGeneratedColumn("uuid")
    uuid: string

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.00 })
    price: number;
    

    @BeforeInsert()
        createUuid(){
            this.uuid = uuid()
        }
}
