import { PartialType } from '@nestjs/mapped-types';
import { CreateMenuCategoryDto } from './menucat-create-dto';

export class UpdateMenuCategoryDto extends PartialType(CreateMenuCategoryDto) {}
