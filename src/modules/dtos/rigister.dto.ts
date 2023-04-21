import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class Rigister {
  @ApiProperty()
  @IsOptional()
  @IsString()
  fistName: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  lastName: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({ required: true })
  @IsOptional()
  @IsString()
  passWord: string;
}
