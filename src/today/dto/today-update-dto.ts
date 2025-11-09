import { IsInt, IsDateString, IsOptional } from 'class-validator';

export class UpdateMenuTodayDto {
  @IsOptional()
  @IsInt()
  menu_item_id?: number;

  @IsOptional()
  @IsDateString({}, { message: 'El campo date debe tener formato válido (YYYY-MM-DD)' })
  date?: string;
}