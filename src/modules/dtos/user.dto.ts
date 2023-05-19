import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsEmail, IsString } from 'class-validator';

export class UserDto {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  password: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  cartList: [string];

  @ApiProperty()
  @IsOptional()
  @IsString()
  oderList: [string];
}
