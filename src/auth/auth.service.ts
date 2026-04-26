import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';
import * as bcrypt from 'bcrypt';

type SafeUser = Omit<User, 'password'>;

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<SafeUser | null> {
    if (!email || !password) {
      return null;
    }

    const user = await this.usersService.findByEmail(
      email.trim().toLowerCase(),
    );

    if (!user) {
      return null;
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return null;
    }

    const { password: _password, ...safeUser } = user;
    return safeUser;
  }

  async login(user: SafeUser) {
    const payload = {
      sub: user.id,
      email: user.email,
    };

    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }

 async register(data?: any) {
  const body = data ?? {};

  const full_name = String(body.full_name ?? '').trim();
  const email = String(body.email ?? '').trim().toLowerCase();
  const password = String(body.password ?? '').trim();

  if (!full_name || !email || !password) {
    throw new BadRequestException(
      'Nome completo, email e senha são obrigatórios.',
    );
  }

  const existing = await this.usersService.findByEmail(email);

  if (existing) {
    throw new BadRequestException('Email já cadastrado.');
  }

  const user = await this.usersService.create({
    full_name,
    email,
    password,
    category: body.category ?? 'driver',
    platform_origin: body.platform_origin ?? 'web',
  });

  const { password: _password, ...safeUser } = user;

  return {
    message: 'Usuário criado com sucesso',
    user: safeUser,
  };
 }
}