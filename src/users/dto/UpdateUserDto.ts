import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateUserDto {
  @MaxLength(5000)
  @IsString()
  @IsOptional()
  @ApiPropertyOptional()
  public readonly bio?: string

  @IsString()
  @ApiProperty()
  public readonly follower: string

  @IsString()
  @ApiProperty()
  public readonly following: string

  @IsString()
  @ApiProperty()
  public readonly avatar: string
}