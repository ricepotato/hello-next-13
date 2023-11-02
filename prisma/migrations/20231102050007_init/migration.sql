-- CreateTable
CREATE TABLE `network` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `symbol_url` VARCHAR(200) NULL,
    `chain_id` INTEGER NOT NULL,
    `symbol` VARCHAR(10) NOT NULL DEFAULT '',
    `block_exp_url` VARCHAR(200) NOT NULL DEFAULT '',

    UNIQUE INDEX `idx_name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plan` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    `type` VARCHAR(10) NOT NULL,
    `description` VARCHAR(200) NULL,
    `daily_api_call` INTEGER NOT NULL,
    `active_account` INTEGER NOT NULL,
    `price` INTEGER NOT NULL,
    `charge_per_exceed` INTEGER NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `idx_name`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
