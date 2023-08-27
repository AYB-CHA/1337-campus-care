import { Global, Module } from '@nestjs/common';
import AuthController from './auth.controller';
import AuthService from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

const jwtModule = JwtModule.register({
  secret: process.env['JWT_KEY'],
  signOptions: { expiresIn: '2d' },
});

@Global()
@Module({
  imports: [UsersModule, jwtModule],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [jwtModule, UsersModule],
})
export default class AuthModule {}
