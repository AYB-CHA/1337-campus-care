import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ChatService {
  constructor(private readonly prisma: PrismaService) {}

  newTicketMessage(message: string, ticket_id: string, id: string) {
    return this.prisma.chatMessages.create({
      data: {
        sender_id: id,
        message: message,
        ticket_id,
        type: 'INFRA_TICKET',
      },
    });
  }

  async getStaffTicketMessages(id: string) {
    return await this.prisma.chatMessages.findMany({
      where: { AND: [{ ticket_id: id }, { type: 'INFRA_TICKET' }] },
      take: 20,
    });
  }
}
