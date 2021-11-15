import {MigrationInterface, QueryRunner} from "typeorm";

export class addedCompanyusername1636958356132 implements MigrationInterface {
    name = 'addedCompanyusername1636958356132'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companyInfo\` ADD \`company_user_name\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companyInfo\` DROP COLUMN \`company_user_name\``);
    }

}
