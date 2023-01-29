/*
  Warnings:

  - You are about to drop the column `text` on the `posts` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `posts` table. All the data in the column will be lost.
  - Added the required column `message` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "posts" DROP COLUMN "text",
DROP COLUMN "title",
ADD COLUMN     "message" TEXT NOT NULL;
