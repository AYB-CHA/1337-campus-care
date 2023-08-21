import { Controller, Get, Redirect, Req, UseGuards } from '@nestjs/common';
import AuthService from './auth.service';
import { AuthGuard, FtOauthGuard } from './auth.gaurd';
import { User } from '@prisma/client';
import { Request } from 'express';

@Controller('/auth')
export default class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get('/login')
  @UseGuards(FtOauthGuard)
  login() {}

  @Get('/back')
  @UseGuards(FtOauthGuard)
  @Redirect()
  async back(@Req() request: Request & { user: User }) {
    let url = new URL(process.env['FRONTEND_BASEURL']);
    url.pathname += '/auth';
    url.searchParams.set(
      'token',
      await this.authService.signUserIn(request.user),
    );
    return {
      url: url.toString(),
    };
  }

  @Get('/me')
  @UseGuards(AuthGuard)
  me(@Req() request: Request & { user: User }) {
    delete request.user['created_at'];
    delete request.user['updated_at'];
    return request.user;
  }
}
