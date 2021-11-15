import {Entity, PrimaryGeneratedColumn, Column, BeforeInsert, OneToMany, BaseEntity} from "typeorm";
import { v4 as uuid } from 'uuid';
import { BaseRecord } from "./BaseRecord";

@Entity("companyInfo")
export class CompanyInfo extends BaseRecord {
    @PrimaryGeneratedColumn("uuid", { name: "company_info_id"})
    companyInfoId: string

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    image: string;

    @Column({name: 'sub_tags'})
    subTags: string;

    @Column({name: 'company_user_name', nullable: false, unique: true})
    companyUserName: string;

    @BeforeInsert()
        createUuid(){
            this.companyInfoId = uuid()
        }
}
