-- CreateTable
CREATE TABLE "animal_productions" (
    "id" TEXT NOT NULL,
    "animal_id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "goal" TEXT NOT NULL,
    "price" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "animal_productions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "animal_productions" ADD CONSTRAINT "animal_productions_animal_id_fkey" FOREIGN KEY ("animal_id") REFERENCES "animals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
