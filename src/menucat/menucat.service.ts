import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException, } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateMenuCategoryDto } from './dto/menucat-create-dto';
import { UpdateMenuCategoryDto } from './dto/menucat-update-dto';
@Injectable()
export class MenucatService {
  constructor(private prisma: PrismaService) {}

 // Obtener todas las categorías de menú
  async getAllMenuCats() {
    try {
      return await this.prisma.menu_categories.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Error al obtener las categorías');
    }
  }

  // Obtener una categoría de menú por ID
  async getMenuCatById(id: number) {
    try {
      const category = await this.prisma.menu_categories.findUnique({ where: { id } });
      if (!category) {
        throw new NotFoundException(`La categoría con ID ${id} no existe`);
      }
      return category;
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Error al obtener la categoría');
    }
  }

  // Crear una nueva categoría de menú
  async createMenuCat(mennu_categorias: CreateMenuCategoryDto) {
    try {
      return await this.prisma.menu_categories.create({
        data: {
          name: mennu_categorias.name,
          description: mennu_categorias.description,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        // Prisma error por valor único duplicado
        throw new BadRequestException('El nombre de la categoría ya está en uso');
      }
      throw new InternalServerErrorException('Error al crear la categoría');
    }
  }

  // Actualizar una categoría de menú por ID
  async updateMenuCatById(id: number, mennu_categorias: UpdateMenuCategoryDto) {
    try {
      // Primero verificamos que exista
      const existing = await this.prisma.menu_categories.findUnique({ where: { id } });
      if (!existing) {
        throw new NotFoundException(`La categoría con ID ${id} no existe`);
      }

      return await this.prisma.menu_categories.update({
        where: { id },
        data: {
          name: mennu_categorias.name,
          description: mennu_categorias.description,
        },
      });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      if (error.code === 'P2002') {
        throw new BadRequestException('El nombre de la categoría ya está en uso');
      }
      throw new InternalServerErrorException('Error al actualizar la categoría');
    }
  }

  // Eliminar una categoría de menú por ID
  async deleteMenuCatById(id: number) {
    try {
      const category = await this.prisma.menu_categories.findUnique({ where: { id } });
      if (!category) {
        throw new NotFoundException(`La categoría con ID ${id} no existe`);
      }

      return await this.prisma.menu_categories.delete({ where: { id } });
    } catch (error) {
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Error al eliminar la categoría');
    }
  }
    
}