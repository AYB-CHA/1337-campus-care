import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class staffInfraTicketDto {
  @IsString()
  @MinLength(5)
  @MaxLength(100)
  title: string;

  @IsString()
  @MinLength(10)
  @MaxLength(255)
  description: string;

  @IsString()
  @IsOptional()
  @MinLength(5)
  @MaxLength(100)
  image: string;
}
