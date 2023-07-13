/*
  Warnings:

  - Added the required column `gender` to the `animals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "animals" ADD COLUMN     "gender" DECIMAL(65,30) NOT NULL;

-- CreateTable
CREATE TABLE "genders" (
    "id" DECIMAL(65,30) NOT NULL,
    "type" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "genders_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_gender_fkey" FOREIGN KEY ("gender") REFERENCES "genders"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
