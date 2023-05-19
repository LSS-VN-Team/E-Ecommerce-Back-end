import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import UserEntity from '../entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
// import { async } from "rxjs";
import { UserDto } from '../dtos/user.dto';
import { RegisterDto } from '../dtos/rigister.dto';
import { sha512 } from '@app/common';
import { Hash } from 'crypto';
import { classToPlain, plainToClass } from 'class-transformer';
import { AuthDto } from '../dtos/auth.dto';
import StringUtils from '@app/core/utils/StringUtils';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
    private readonly jwtService: JwtService,
  ) {}

  async findById(id): Promise<UserEntity> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async login(data: AuthDto) {
    const user = await this.userRepository.findOne({
      where: {
        email: data.email,
      },
    });
    if (!user) throw new NotFoundException('Email not found');
    if (user.email == null) throw new ForbiddenException();
    const isMatch = await sha512(data.password);
    if (!isMatch) throw new BadRequestException('Password is incorrect');
    const payload = {
      uid: user.id,
    };
    const token = await this.jwtService.signAsync(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    const infoLogin = {
      token: token,
      user: user,
    };
    return infoLogin;
  }
  async register(data: RegisterDto): Promise<UserEntity> {
    const where = [];
    if (data.email) {
      where.push({
        email: data.email,
      });
    }
    if (where.length > 0) {
      const isExist = await this.userRepository.findOne({
        where: where,
      });
      if (isExist) {
        if (isExist.email && isExist.email == data.email) {
          throw new BadRequestException('Email đã tồn tại');
        }
      }
    }
    const passwordHash = await sha512(data.password);
    // const procesPasswordHash = await sha512(data.procesPassword)
    const newUser = plainToClass(UserEntity, data);
    newUser.password = passwordHash;
    const user = await this.userRepository.save(newUser);
    const results = await this.userRepository.save(user);
    return results;
  }
}
