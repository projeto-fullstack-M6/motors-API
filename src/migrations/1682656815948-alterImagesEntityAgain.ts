import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterImagesEntityAgain1682656815948 implements MigrationInterface {
    name = 'AlterImagesEntityAgain1682656815948'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "images"`);
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "images"`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD "images" text array DEFAULT '{}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "images"`);
        await queryRunner.query(`ALTER TABLE "announcement" ADD "images" json array DEFAULT '{}'`);
        await queryRunner.query(`ALTER TABLE "addresses" ADD "images" json array DEFAULT '{}'`);
    }

}
