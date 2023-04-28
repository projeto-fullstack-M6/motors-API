import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterImagesEntity1682655832584 implements MigrationInterface {
    name = 'AlterImagesEntity1682655832584'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" ADD "images" json array DEFAULT '{}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "announcement" DROP COLUMN "images"`);
    }

}
