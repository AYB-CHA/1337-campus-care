import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { UsersService } from 'src/users/users.service';
import { Strategy } from 'passport-42';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { ConfigService } from '@nestjs/config';

@Injectable({})
export default class AuthService extends PassportStrategy(Strategy, 'ft') {
  constructor(
    private readonly userService: UsersService,
    private readonly jwt: JwtService,
    private readonly configService: ConfigService,
  ) {
    super({
      clientID: configService.get<string>('FT_UID'),
      clientSecret: configService.get<string>('FT_SECRET'),
      callbackURL: 'http://localhost:4000/auth/back',
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    let user = await this.userService.findOne(profile.username);
    if (user) return user;
    return await this.userService.createOne(
      profile.username,
      profile.emails[0]?.value,
      profile._json.image.link,
      profile.name.givenName,
      profile.name.familyName,
    );
  }

  async signUserIn(user: User) {
    return this.jwt.signAsync({
      id: user.id,
      username: user.username,
    });
  }
}
