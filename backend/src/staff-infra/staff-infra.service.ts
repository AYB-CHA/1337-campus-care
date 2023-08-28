import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StaffInfraService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllTickets() {
    let posts = await this.prisma.staffInfraTicket.findMany({
      orderBy: {
        created_at: 'asc',
      },
      select: {
        id: true,
        image: true,
        title: true,
        description: true,
        created_at: true,
        User: { select: { username: true, id: true } },
      },
    });
    return posts;
  }
  async addNewTicket(
    title: string,
    description: string,
    image: string | null = null,
    user_id: string,
  ) {
    return await this.prisma.staffInfraTicket.create({
      data: { title, description, image, user_id },
    });
  }
}
