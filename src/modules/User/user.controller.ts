import { CmsAuth } from '@app/common/decorators/cms-auth.decorater';
import { responseError, responseSuccess } from '@app/core';
import { Body, Controller, Get, Logger } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthController } from '../auth/auth.controller';
import { UserDto } from '../dtos/user.dto';
import UserEntity from '../entities/user.entity';
import { UserService } from './user.service';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}
  private readonly logger = new Logger(UserController.name);

  @ApiOperation({ summary: 'Get all user' })
  @CmsAuth()
  @Get('')
  async(data: UserDto) {
    try {
      const result = this.userService.getProfile(data);
      return responseSuccess(result);
    } catch (error) {
      console.log(error.message);
      this.logger.error(error.stack);
      return responseError(error.message || error);
    }
  }
}
