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
    });
    console.log(posts);
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
