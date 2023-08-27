/*
  Warnings:

  - You are about to drop the column `role` on the `StaffInfraTicket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "StaffInfraTicket" DROP COLUMN "role",
ADD COLUMN     "status" "StaffInfraTicketStatus" NOT NULL DEFAULT 'NEW';
