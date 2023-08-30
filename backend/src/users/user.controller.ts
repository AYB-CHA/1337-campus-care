import { Body, Controller, Put, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.gaurd';
import { UsersService } from './users.service';
import { UserUpdateDto } from './user-update.dto';
import { User } from '@prisma/client';

@Controller('/user')
export class userController {
  constructor(private readonly userService: UsersService) {}
  @UseGuards(AuthGuard)
  @Put('/')
  edit(@Body() data: UserUpdateDto, @Req() request: Request & { user: User }) {
    return this.userService.updateUserData(
      data.firstname,
      data.lastname,
      data.avatar ?? request.user.avatar,
      request.user.id,
    );
  }
}
