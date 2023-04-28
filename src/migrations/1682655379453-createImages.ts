import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateImages1682655379453 implements MigrationInterface {
    name = 'CreateImages1682655379453'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" ADD "images" json array DEFAULT '{}'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "addresses" DROP COLUMN "images"`);
    }

}
