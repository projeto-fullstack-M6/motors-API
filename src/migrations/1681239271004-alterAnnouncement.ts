import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterAnnouncement1681239271004 implements MigrationInterface {
    name = 'AlterAnnouncement1681239271004'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" ADD "deletedAt" TIMESTAMP`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "deletedAt"`);
    }

}
