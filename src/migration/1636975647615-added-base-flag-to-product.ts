import {MigrationInterface, QueryRunner} from "typeorm";

export class addedBaseFlagToProduct1636975647615 implements MigrationInterface {
    name = 'addedBaseFlagToProduct1636975647615'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`created_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`updated_at\` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`created_at\``);
    }

}
