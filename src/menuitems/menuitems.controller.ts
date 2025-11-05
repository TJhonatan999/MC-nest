import { Controller } from '@nestjs/common';
import { MenuitemsService } from './menuitems.service';

@Controller('menuitems')
export class MenuitemsController {
  constructor(private readonly menuitemsService: MenuitemsService) {}
}
