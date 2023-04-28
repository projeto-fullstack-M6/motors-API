import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterYear1682369039564 implements MigrationInterface {
    name = 'AlterYear1682369039564'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD "year" character varying(4) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "announcement" ALTER COLUMN "isGoodToSale" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "announcement" ALTER COLUMN "isGoodToSale" DROP DEFAULT`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" ALTER COLUMN "isGoodToSale" SET DEFAULT true`);
        await queryRunner.query(`ALTER TABLE "announcement" ALTER COLUMN "isGoodToSale" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "year"`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD "year" integer NOT NULL`);
    }

}
