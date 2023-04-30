import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedDeckTable1682861363780 implements MigrationInterface {
    name = 'AddedDeckTable1682861363780'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "deck" ("id" integer NOT NULL, "name" character varying NOT NULL, "description" character varying, CONSTRAINT "PK_99f8010303acab0edf8e1df24f9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "flash_card" ADD "deckId" integer`);
        await queryRunner.query(`ALTER TABLE "flash_card" ADD CONSTRAINT "FK_9f7d924d66910f3f7099741e7bd" FOREIGN KEY ("deckId") REFERENCES "deck"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "flash_card" DROP CONSTRAINT "FK_9f7d924d66910f3f7099741e7bd"`);
        await queryRunner.query(`ALTER TABLE "flash_card" DROP COLUMN "deckId"`);
        await queryRunner.query(`DROP TABLE "deck"`);
    }

}
