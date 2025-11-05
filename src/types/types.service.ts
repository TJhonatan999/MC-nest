import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService} from '../prisma.service';
import { createTypeDto } from './dto/create-type-dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class TypesService {
  constructor(private prisma:PrismaService) {}
  
  async getallTypes() {
    const userstype = await this.prisma.usertype.findMany();
    return userstype;
  }
  
  async createType(dto: createTypeDto) {
    try {
      return await this.prisma.usertype.create({ data: dto });
    } catch (error) {
      // Error de Prisma
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2002':
            // Error de campo único (NAME)
            throw new HttpException(
              `Ya existe un rol con ese nombre`,
              HttpStatus.CONFLICT,
            );

          case 'P2000':
            throw new HttpException(
              `Uno de los valores es demasiado largo para el campo`,
              HttpStatus.BAD_REQUEST,
            );

          case 'P2003':
            throw new HttpException(
              `Referencia inválida a otra tabla`,
              HttpStatus.BAD_REQUEST,
            );

          default:
            throw new HttpException(
              `Error en la base de datos: ${error.message}`,
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
      }

      // Error no reconocido
      throw new HttpException(
        `Error interno al crear el tipo de usuario`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  async updateTypeById(id: number, dto: createTypeDto) {
    try {
      return await this.prisma.usertype.update({
        where: { id },
        data: dto,
      });
    } catch (error) {
      // Errores de Prisma
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        switch (error.code) {
          case 'P2025':
            throw new HttpException(
              `No se encontró el tipo de usuario con ID ${id}`,
              HttpStatus.NOT_FOUND,
            );
          case 'P2002':
            throw new HttpException(
              `Ya existe un tipo de usuario con ese nombre`,
              HttpStatus.CONFLICT,
            );
          case 'P2000':
            throw new HttpException(
              `Uno de los valores supera la longitud permitida`,
              HttpStatus.BAD_REQUEST,
            );
          default:
            throw new HttpException(
              `Error al actualizar tipo de usuario: ${error.message}`,
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
        }
      }

      // Error general no manejado
      throw new HttpException(
        `Error interno al actualizar el tipo de usuario`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async deleteType(id: number) {
    await this.prisma.usertype.delete({
      where: { id },
    });
    return { message: 'rol eliminado correctamente' };
  }

}
