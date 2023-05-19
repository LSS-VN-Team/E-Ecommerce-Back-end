import {
  Body,
  Controller,
  Get,
  Logger,
  Param,
  Post,
  Request,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthDto } from '../dtos/auth.dto';
import { RegisterDto } from '../dtos/rigister.dto';
import { responseError, responseSuccess } from 'libs/core/base/base.controller';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  private readonly logger = new Logger(AuthController.name);

  @Post('sign-in')
  @ApiOperation({ summary: 'Sign in user' })
  async login(@Body() data: AuthDto) {
    try {
      const result = await this.authService.login(data);
      return responseSuccess(result);
    } catch (error) {
      console.log(error.message);
      this.logger.error(error.stack);
      return responseError(error.message || error);
    }
    // return this.authService.login(data);
  }

  @ApiOperation({ summary: 'Sign up user' })
  @Post('sign-up')
  async register(@Body() data: RegisterDto) {
    try {
      const result = await this.authService.register(data);
      return responseSuccess(result);
    } catch (error) {
      console.log(error.message);
      this.logger.error(error.stack);
      return responseError(error.message || error);
    }
  }
  @ApiOperation({ summary: 'Find user by Id' })
  @Get(':id')
  async findById(@Param('id') id: number) {
    return this.authService.findById(id);
  }
}
