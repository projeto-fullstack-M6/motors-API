import { MigrationInterface, QueryRunner } from "typeorm";

export class ResetToken1682639321421 implements MigrationInterface {
    name = 'ResetToken1682639321421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" ADD "deletedAt" TIMESTAMP`);
        await queryRunner.query(`ALTER TABLE "users" ADD "resetToken" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "resetToken"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "deletedAt"`);
    }

}
