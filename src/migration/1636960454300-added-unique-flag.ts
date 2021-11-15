import {MigrationInterface, QueryRunner} from "typeorm";

export class addedUniqueFlag1636960454300 implements MigrationInterface {
    name = 'addedUniqueFlag1636960454300'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companyInfo\` ADD UNIQUE INDEX \`IDX_77fea3802dcae721532d5891e4\` (\`company_user_name\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`companyInfo\` DROP INDEX \`IDX_77fea3802dcae721532d5891e4\``);
    }

}
