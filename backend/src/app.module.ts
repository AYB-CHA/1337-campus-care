import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PrismaModule } from './prisma/prisma.module';
import AuthModule from './auth/auth.module';

@Module({
  imports: [AuthModule, UsersModule, PrismaModule],
})
export class AppModule {}
