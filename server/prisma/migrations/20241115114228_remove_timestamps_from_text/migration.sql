/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Text` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Text` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `images` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `texts` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `texts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Text" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "images" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "texts" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";