/*
  Warnings:

  - Added the required column `updatedAt` to the `Text` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `texts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Text" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "texts" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
