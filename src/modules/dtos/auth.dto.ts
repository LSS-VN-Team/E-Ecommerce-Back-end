import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'You must enter the username' })
  email: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty({ message: 'You must enter the password' })
  password: string;
}
