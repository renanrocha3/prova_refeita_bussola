import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async signIn(
    email: string,
    pass: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findOneByEmail(email);
    console.log(user)
    const isMatch = await bcrypt.compare(pass, user.senha)
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.senha, email: user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}