-- CreateEnum
CREATE TYPE "ChatMessagesType" AS ENUM ('DM', 'INFRA_TICKET');

-- CreateTable
CREATE TABLE "ChatMessages" (
    "id" TEXT NOT NULL,
    "sender_id" TEXT NOT NULL,
    "receiver_id" TEXT NOT NULL,
    "ticket_id" TEXT,
    "type" "ChatMessagesType" NOT NULL DEFAULT 'DM',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ChatMessages_id_key" ON "ChatMessages"("id");

-- AddForeignKey
ALTER TABLE "ChatMessages" ADD CONSTRAINT "ChatMessages_sender_id_fkey" FOREIGN KEY ("sender_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChatMessages" ADD CONSTRAINT "ChatMessages_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
