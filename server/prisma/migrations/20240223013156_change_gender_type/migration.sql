/*
  Warnings:

  - You are about to alter the column `gender` on the `animals` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - The primary key for the `genders` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `name` on the `genders` table. All the data in the column will be lost.
  - You are about to alter the column `id` on the `genders` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Integer`.
  - A unique constraint covering the columns `[type]` on the table `genders` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "animals" DROP CONSTRAINT "animals_gender_fkey";

-- AlterTable
ALTER TABLE "animals" ALTER COLUMN "gender" SET DATA TYPE INTEGER;

-- AlterTable
CREATE SEQUENCE genders_id_seq;
ALTER TABLE "genders" DROP CONSTRAINT "genders_pkey",
DROP COLUMN "name",
ALTER COLUMN "id" SET DEFAULT nextval('genders_id_seq'),
ALTER COLUMN "id" SET DATA TYPE SERIAL,
ALTER COLUMN "type" SET DATA TYPE TEXT,
ADD CONSTRAINT "genders_pkey" PRIMARY KEY ("id");
ALTER SEQUENCE genders_id_seq OWNED BY "genders"."id";

-- CreateIndex
CREATE UNIQUE INDEX "genders_type_key" ON "genders"("type");

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_gender_fkey" FOREIGN KEY ("gender") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
