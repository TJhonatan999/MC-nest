import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateMenuItemDto } from './dto/menu-create-dto';
import { UpdateMenuItemDto } from './dto/menu-update-dto';
@Injectable()
export class MenuitemsService {
  constructor(private prisma: PrismaService) {}

  async getAllMenuItems() {
    return this.prisma.menu_items.findMany();
  }
  async getMenuItemById(id: number) {
    return this.prisma.menu_items.findUnique({
      where: { id },
    });
  }
  async createMenuItem(data: CreateMenuItemDto) {
    return this.prisma.menu_items.create({
      data,
    });
  }
  
  async updateMenuItem(id: number, data: UpdateMenuItemDto) {
    return this.prisma.menu_items.update({
      where: { id },
      data,
    });
  }
  async deleteMenuItem(id: number) { 
    return this.prisma.menu_items.delete({
      where: { id },
    });
  }
}
