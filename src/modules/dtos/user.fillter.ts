import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class UserFilter {
  @ApiProperty({ required: false })
  @IsOptional()
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  code: number;
}
