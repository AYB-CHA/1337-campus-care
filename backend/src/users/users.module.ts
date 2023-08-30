import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { userController } from './user.controller';

@Module({
  controllers: [userController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
