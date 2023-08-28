import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StaffInfraService {
  constructor(private readonly prisma: PrismaService) {}
  async getAllTickets(dateSort: 'desc' | 'asc', search: string) {
    let posts = await this.prisma.staffInfraTicket.findMany({
      orderBy: {
        created_at: dateSort,
      },
      where: {
        OR: [
          {
            description: {
              contains: search,
            },
          },
          {
            title: {
              contains: search,
            },
          },
        ],
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
  async deleteForUser(id: string, userId: string) {
    await this.prisma.staffInfraTicket.deleteMany({
      where: { AND: [{ id: id }, { user_id: userId }] },
    });
  }
}
