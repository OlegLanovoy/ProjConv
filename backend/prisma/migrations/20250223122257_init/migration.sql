-- CreateTable
CREATE TABLE "Convert" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "currency" DOUBLE PRECISION NOT NULL DEFAULT 0.00,

    CONSTRAINT "Convert_pkey" PRIMARY KEY ("id")
);
