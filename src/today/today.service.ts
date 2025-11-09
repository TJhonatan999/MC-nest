import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateMenuTodayDto } from './dto/today-create-dto';
import { UpdateMenuTodayDto } from './dto/today-update-dto';

@Injectable()
export class TodayService {
  constructor(private readonly prisma: PrismaService) {}

  getAllMenuToday() {
    return this.prisma.menu_today.findMany();
  }
  getMenuTodayById(id: number) {
    return this.prisma.menu_today.findUnique({
      where: { id },
    });
  }
  createMenuToday(menu_today: CreateMenuTodayDto) {
    return this.prisma.menu_today.create({
      data: menu_today,
    });
  }
  updateMenuToday(id: number, menu_today: UpdateMenuTodayDto) {
    return this.prisma.menu_today.update({
      where: { id },
      data: menu_today,
    });
  }
  deleteMenuToday(id: number) {
    return this.prisma.menu_today.delete({
      where: { id },
    });
  } 
}
