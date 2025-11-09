import { Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { MenuitemsService } from './menuitems.service';
import { CreateMenuItemDto } from './dto/menu-create-dto';
import { UpdateMenuItemDto } from './dto/menu-update-dto';

@Controller('menuitems')
export class MenuitemsController {
  constructor(private readonly menuitemsService: MenuitemsService) {}
  @Get()
  getAllMenuItems() {
    return this.menuitemsService.getAllMenuItems();
  }
  @Get(':id')
  getMenuItemById(@Param('id') id: string) {
    return this.menuitemsService.getMenuItemById(parseInt(id));
  }
  @Post()
  createMenuItem(@Body() menu_items: CreateMenuItemDto) {
    return this.menuitemsService.createMenuItem(menu_items);
  }
  @Put(':id')
  updateMenuItemById(@Param('id') id: string, @Body() menu_item: UpdateMenuItemDto) {
    return this.menuitemsService.updateMenuItem(parseInt(id), menu_item);
  }
}
