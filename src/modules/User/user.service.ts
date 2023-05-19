import { PaginationOptions } from '@app/common';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'bcrypt';
import { classToPlain, plainToClass } from 'class-transformer';
import { FindOptionsWhere, Repository } from 'typeorm';
import { UserDto } from '../dtos/user.dto';
import { UserFilter } from '../dtos/user.fillter';
import UserEntity from '../entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserDto)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async getProfile(request): Promise<any> {
    const id = request.user.id;
    const user = await this.userRepository.findOne({
      where: {
        id,
      },
    });
    const results = classToPlain(user, { ignoreDecorators: true });
    return results;
  }

  async update(data: UserDto, id: number, request, role: string): Promise<any> {
    let user: UserDto;
    const where: FindOptionsWhere<UserEntity>[] = [];
    if (data.email && data.email !== user.email) {
      where.push({
        email: data.email,
      });
    }
    if (where.length > 0) {
      const isExist = await this.userRepository.findOne({
        where: where,
        select: ['id'],
      });
      if (isExist) {
        if (isExist.email && isExist.email == data.email)
          throw new BadRequestException('Email đã tồn tại');
      }
    }
    if (data.password) {
      data.password = await hash(data.password, 10);
    }
    const userUpdate = plainToClass(
      UserEntity,
      { ...user, ...data },
      { ignoreDecorators: true },
    );
    const userUpdated = await this.userRepository.save(userUpdate);
    const results = classToPlain(userUpdated, { ignoreDecorators: true });
    return results;
  }

  private async getFilter(filter: UserFilter) {
    const where: FindOptionsWhere<UserEntity>[] = [];
    return where;
  }
}
