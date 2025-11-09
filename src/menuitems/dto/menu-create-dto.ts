import {
  IsInt,
  IsString,
  IsOptional,
  IsNumber,
  IsBoolean,
  IsUrl,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateMenuItemDto {
  @IsInt()
  category_id: number;

  @IsString()
  @MaxLength(100)
  @MinLength(2)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  description?: string;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  price: number;

  @IsOptional()
  @IsUrl({}, { message: 'Debe ser una URL válida' })
  @MaxLength(255)
  image_url?: string;

  @IsOptional()
  @IsBoolean()
  is_available?: boolean;
}