import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { TodayService } from './today.service';
import { CreateMenuTodayDto } from './dto/today-create-dto';
import { UpdateMenuTodayDto } from './dto/today-update-dto';

@Controller('today')
export class TodayController {
  constructor(private readonly todayService: TodayService) {}
  
  @Get()
  getAllMenuToday() {
    return this.todayService.getAllMenuToday();
  }

  @Get(':id')
  getMenuTodayById(@Param('id') id: string) {
    return this.todayService.getMenuTodayById(parseInt(id));
  }

  @Post()
  createMenuToday(@Body() menu_today: CreateMenuTodayDto) {
    return this.todayService.createMenuToday(menu_today);
  }

  @Put(':id')
  updateMenuTodayById(@Param('id') id: string, @Body() menu_today: UpdateMenuTodayDto) {
    return this.todayService.updateMenuToday(parseInt(id), menu_today);
  }

  @Delete(':id')
  deleteMenuTodayById(@Param('id') id: string) {
    return this.todayService.deleteMenuToday(parseInt(id));
  }

}
