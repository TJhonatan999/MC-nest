import { IsString, IsOptional, MaxLength } from 'class-validator';

export class CreateMenuCategoryDto {
  @IsString()
  @MaxLength(50)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(150)
  description?: string;
}
