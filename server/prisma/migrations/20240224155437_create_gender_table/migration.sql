/*
  Warnings:

  - Added the required column `gender` to the `animals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "animals" ADD COLUMN     "gender" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "genders" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "genders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "genders_type_key" ON "genders"("type");

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_gender_fkey" FOREIGN KEY ("gender") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
