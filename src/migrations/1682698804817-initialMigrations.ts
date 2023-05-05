import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigrations1682698804817 implements MigrationInterface {
    name = 'InitialMigrations1682698804817'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "resetToken" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "resetToken"`);
    }

}
