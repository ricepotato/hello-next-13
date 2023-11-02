/*
  Warnings:

  - The primary key for the `network` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `network` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(40)`.
  - The primary key for the `plan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `plan` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(40)`.

*/
-- AlterTable
ALTER TABLE `network` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(40) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `plan` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(40) NOT NULL,
    ADD PRIMARY KEY (`id`);
