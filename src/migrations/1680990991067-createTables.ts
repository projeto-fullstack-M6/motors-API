import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1680990991067 implements MigrationInterface {
    name = 'CreateTables1680990991067'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" ADD "color" character varying(50) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "color"`);
    }

}
