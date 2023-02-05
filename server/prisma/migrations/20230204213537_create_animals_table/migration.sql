-- CreateTable
CREATE TABLE "animals" (
    "id" TEXT NOT NULL,
    "identification" INTEGER NOT NULL,
    "father_id" INTEGER,
    "mother_id" INTEGER,
    "weight" DECIMAL(65,30),
    "birthdate" TIMESTAMP(3),
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "animals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_animals" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "animal_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_animals_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "animals_identification_key" ON "animals"("identification");

-- AddForeignKey
ALTER TABLE "user_animals" ADD CONSTRAINT "user_animals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_animals" ADD CONSTRAINT "user_animals_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
