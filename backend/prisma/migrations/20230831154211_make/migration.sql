-- DropForeignKey
ALTER TABLE "ChatMessages" DROP CONSTRAINT "ChatMessages_receiver_id_fkey";

-- AlterTable
ALTER TABLE "ChatMessages" ALTER COLUMN "receiver_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "ChatMessages" ADD CONSTRAINT "ChatMessages_receiver_id_fkey" FOREIGN KEY ("receiver_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
