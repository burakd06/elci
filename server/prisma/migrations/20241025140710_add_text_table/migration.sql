/*
  Warnings:

  - The primary key for the `Text` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `content` on the `Text` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Text` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Text` table. All the data in the column will be lost.
  - Added the required column `element` to the `Text` table without a default value. This is not possible if the table is not empty.
  - Added the required column `path` to the `Text` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Text` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Text" DROP CONSTRAINT "Text_pkey",
DROP COLUMN "content",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "element" TEXT NOT NULL,
ADD COLUMN     "path" TEXT NOT NULL,
ADD COLUMN     "text" TEXT NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Text_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Text_id_seq";
