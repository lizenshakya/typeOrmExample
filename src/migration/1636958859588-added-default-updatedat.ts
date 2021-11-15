import {MigrationInterface, QueryRunner} from "typeorm";

export class addedDefaultUpdatedat1636958859588 implements MigrationInterface {
    name = 'addedDefaultUpdatedat1636958859588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companyInfo\` CHANGE \`updated_at\` \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companyInfo\` CHANGE \`updated_at\` \`updated_at\` timestamp NOT NULL`);
    }

}
