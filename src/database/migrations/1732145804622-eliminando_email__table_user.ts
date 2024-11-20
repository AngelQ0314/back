import { MigrationInterface, QueryRunner } from "typeorm";

export class EliminandoEmail_tableUser1732145804622 implements MigrationInterface {
    name = 'EliminandoEmail_tableUser1732145804622'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
    }

}
