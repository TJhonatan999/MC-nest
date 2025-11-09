import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { MenucatService } from './menucat.service';
import { CreateMenuCategoryDto } from './dto/menucat-create-dto';
import { UpdateMenuCategoryDto } from './dto/menucat-update-dto';
@Controller('menucat')
export class MenucatController {
  constructor(private readonly menucatService: MenucatService) {}
  @Get()
  getAllMenuCats() {
    return this.menucatService.getAllMenuCats();
  }
  @Get(':id')
  getMenuCatById(@Param('id') id: string) {
    return this.menucatService.getMenuCatById(parseInt(id));
  } 
  @Post()
  createMenuCat(@Body() mennu_categorias: CreateMenuCategoryDto) {
    return this.menucatService.createMenuCat(mennu_categorias);
  }
  @Put(':id')
  updateMenuCatById(@Body() mennu_categorias: UpdateMenuCategoryDto, @Param('id') id: string) {
    return this.menucatService.updateMenuCatById(parseInt(id), mennu_categorias);
  }
  @Delete(':id')
  deleteMenuCatById(@Param('id') id: string) {
    return this.menucatService.deleteMenuCatById(parseInt(id));
  }
}
