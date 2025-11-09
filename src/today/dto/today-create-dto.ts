import { IsInt, IsDateString, IsOptional } from 'class-validator';

export class CreateMenuTodayDto {
  @IsInt()
  menu_item_id: number;

  @IsDateString({}, { message: 'El campo date debe tener formato válido (YYYY-MM-DD)' })
  date: string;
}

