/*
  Warnings:

  - You are about to drop the `ChatMessages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChatMessages" DROP CONSTRAINT "ChatMessages_receiver_id_fkey";

-- DropForeignKey
ALTER TABLE "ChatMessages" DROP CONSTRAINT "ChatMessages_sender_id_fkey";

-- DropTable
DROP TABLE "ChatMessages";

-- DropEnum
DROP TYPE "ChatMessagesType";

-- CreateTable
CREATE TABLE "InfraTicketChatMessages" (
    "id" TEXT NOT NULL,
    "sender_id" TEXT NOT NULL,
    "ticket_id" TEXT NOT NULL,
    "message" TEXT NOT NULL DEFAULT '',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "InfraTicketChatMessages_id_key" ON "InfraTicketChatMessages"("id");

-- AddForeignKey
ALTER TABLE "InfraTicketChatMessages" ADD CONSTRAINT "InfraTicketChatMessages_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InfraTicketChatMessages" ADD CONSTRAINT "InfraTicketChatMessages_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "StaffInfraTicket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
