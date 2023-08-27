-- CreateEnum
CREATE TYPE "StaffInfraTicketStatus" AS ENUM ('NEW', 'FIXED', 'ON_IT', 'WONT_FIX', 'DUBLICATE', 'IRRELEEVANT');

-- CreateTable
CREATE TABLE "StaffInfraTicket" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT,
    "user_id" TEXT NOT NULL,
    "role" "StaffInfraTicketStatus" NOT NULL DEFAULT 'NEW'
);

-- CreateIndex
CREATE UNIQUE INDEX "StaffInfraTicket_id_key" ON "StaffInfraTicket"("id");

-- AddForeignKey
ALTER TABLE "StaffInfraTicket" ADD CONSTRAINT "StaffInfraTicket_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
