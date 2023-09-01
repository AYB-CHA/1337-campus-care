import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatService {
  constructor(private readonly prisma: PrismaService) {}

  newTicketMessage(message: string, ticket_id: string, id: string) {
    return this.prisma.infraTicketChatMessages.create({
      data: {
        sender_id: id,
        message: message,
        ticket_id,
      },
    });
  }

  async getStaffTicketMessages(id: string) {
    return await this.prisma.infraTicketChatMessages.findMany({
      where: { ticket_id: id },
      orderBy: {
        created_at: 'asc',
      },
      take: 20,
    });
  }
}
