import { Controller } from '@nestjs/common';
import { MenucatService } from './menucat.service';

@Controller('menucat')
export class MenucatController {
  constructor(private readonly menucatService: MenucatService) {}
}
