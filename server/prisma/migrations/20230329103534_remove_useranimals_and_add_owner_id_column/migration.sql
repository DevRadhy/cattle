/*
  Warnings:

  - You are about to drop the `user_animals` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `owner_id` to the `animals` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "user_animals" DROP CONSTRAINT "user_animals_animal_id_fkey";

-- DropForeignKey
ALTER TABLE "user_animals" DROP CONSTRAINT "user_animals_user_id_fkey";

-- DropIndex
DROP INDEX "animals_identification_key";

-- AlterTable
ALTER TABLE "animals" ADD COLUMN     "owner_id" TEXT NOT NULL;

-- DropTable
DROP TABLE "user_animals";

-- AddForeignKey
ALTER TABLE "animals" ADD CONSTRAINT "animals_owner_id_fkey" FOREIGN KEY ("owner_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
