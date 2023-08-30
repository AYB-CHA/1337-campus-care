import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}
  updateUserData(
    firstname: string,
    lastname: string,
    avatar: string,
    id: string,
  ) {
    return this.prisma.user.update({
      data: { firstname, lastname, avatar },
      where: { id },
    });
  }

  async findOne(username: string): Promise<User> {
    return this.prisma.user.findFirst({
      where: { username },
    });
  }

  async createOne(
    username: string,
    email: string,
    avatar: string,
    firstname: string,
    lastname: string,
  ) {
    return this.prisma.user.create({
      data: { username, email, avatar, firstname, lastname },
    });
  }
}
