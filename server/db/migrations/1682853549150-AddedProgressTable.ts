import { MigrationInterface, QueryRunner } from "typeorm";

export class AddedProgressTable1682853549150 implements MigrationInterface {
    name = 'AddedProgressTable1682853549150'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."progress_timeperiod_enum" AS ENUM('Weekly', 'Monthly')`);
        await queryRunner.query(`CREATE TABLE "progress" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "timePeriod" "public"."progress_timeperiod_enum" NOT NULL DEFAULT 'Weekly', "startDate" TIMESTAMP NOT NULL, "endDate" TIMESTAMP NOT NULL, "flashCardReviewed" integer, "correctReviews" integer, "accuracy" integer, "userId" uuid, CONSTRAINT "REL_0366c96237f98ea1c8ba6e1ec3" UNIQUE ("userId"), CONSTRAINT "PK_79abdfd87a688f9de756a162b6f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "progress" ADD CONSTRAINT "FK_0366c96237f98ea1c8ba6e1ec35" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "progress" DROP CONSTRAINT "FK_0366c96237f98ea1c8ba6e1ec35"`);
        await queryRunner.query(`DROP TABLE "progress"`);
        await queryRunner.query(`DROP TYPE "public"."progress_timeperiod_enum"`);
    }

}
