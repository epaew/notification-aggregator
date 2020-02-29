import { MigrationInterface, QueryRunner } from 'typeorm'

export class init1582972149354 implements MigrationInterface {
  name = 'init1582972149354'

  public async up (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('CREATE TABLE "channels" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "public" boolean NOT NULL DEFAULT false, "secret" character varying NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "created_by_id" character varying NOT NULL, CONSTRAINT "PK_bc603823f3f741359c2339389f9" PRIMARY KEY ("id"))', undefined)
    await queryRunner.query('CREATE UNIQUE INDEX "IDX_8b0d6aea8960f2b46fdeb3687b" ON "channels" ("secret") ', undefined)
    await queryRunner.query('CREATE TABLE "notifications" ("id" BIGSERIAL NOT NULL, "body" text NOT NULL, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "channel_id" uuid NOT NULL, CONSTRAINT "PK_6a72c3c0f683f6462415e653c3a" PRIMARY KEY ("id"))', undefined)
    await queryRunner.query('CREATE TABLE "users" ("id" character varying NOT NULL, "display_name" character varying NOT NULL, "photo_url" character varying, "created_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updated_at" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))', undefined)
    await queryRunner.query('CREATE TABLE "user_subscribed_channels" ("user_id" character varying NOT NULL, "channel_id" uuid NOT NULL, CONSTRAINT "PK_3449ebcc7e2c95d48380733036a" PRIMARY KEY ("user_id", "channel_id"))', undefined)
    await queryRunner.query('CREATE INDEX "IDX_f6dab91167509c3d9b402f65a0" ON "user_subscribed_channels" ("user_id") ', undefined)
    await queryRunner.query('CREATE INDEX "IDX_64e4daceaa844ceec6df0a9e12" ON "user_subscribed_channels" ("channel_id") ', undefined)
    await queryRunner.query('ALTER TABLE "channels" ADD CONSTRAINT "FK_97de4e522303c1fc23dbf10cd7c" FOREIGN KEY ("created_by_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION', undefined)
    await queryRunner.query('ALTER TABLE "notifications" ADD CONSTRAINT "FK_d9b273840b515b44729879b44fd" FOREIGN KEY ("channel_id") REFERENCES "channels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION', undefined)
    await queryRunner.query('ALTER TABLE "user_subscribed_channels" ADD CONSTRAINT "FK_f6dab91167509c3d9b402f65a09" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION', undefined)
    await queryRunner.query('ALTER TABLE "user_subscribed_channels" ADD CONSTRAINT "FK_64e4daceaa844ceec6df0a9e12f" FOREIGN KEY ("channel_id") REFERENCES "channels"("id") ON DELETE CASCADE ON UPDATE NO ACTION', undefined)
  }

  public async down (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('ALTER TABLE "user_subscribed_channels" DROP CONSTRAINT "FK_64e4daceaa844ceec6df0a9e12f"', undefined)
    await queryRunner.query('ALTER TABLE "user_subscribed_channels" DROP CONSTRAINT "FK_f6dab91167509c3d9b402f65a09"', undefined)
    await queryRunner.query('ALTER TABLE "notifications" DROP CONSTRAINT "FK_d9b273840b515b44729879b44fd"', undefined)
    await queryRunner.query('ALTER TABLE "channels" DROP CONSTRAINT "FK_97de4e522303c1fc23dbf10cd7c"', undefined)
    await queryRunner.query('DROP INDEX "IDX_64e4daceaa844ceec6df0a9e12"', undefined)
    await queryRunner.query('DROP INDEX "IDX_f6dab91167509c3d9b402f65a0"', undefined)
    await queryRunner.query('DROP TABLE "user_subscribed_channels"', undefined)
    await queryRunner.query('DROP TABLE "users"', undefined)
    await queryRunner.query('DROP TABLE "notifications"', undefined)
    await queryRunner.query('DROP INDEX "IDX_8b0d6aea8960f2b46fdeb3687b"', undefined)
    await queryRunner.query('DROP TABLE "channels"', undefined)
  }
}
