import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UserUpdateDto {
  @IsString()
  @MinLength(3)
  @MaxLength(25)
  firstname: string;

  @IsString()
  @MinLength(3)
  @MaxLength(25)
  lastname: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  @MaxLength(100)
  avatar?: string;
}
