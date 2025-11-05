import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService} from '../prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/user-create-dto';
import { UpdateUserDto } from './dto/user-update-dto';

@Injectable()
export class UserService {
  constructor (private prisma: PrismaService) {}

  // Obtener todos los usuarios
  async getAllUsers() {
     const allusers = await this.prisma.users.findMany();
     return allusers.map(({ password_hash, ...rest }) => rest);
  }
  // Obtener un usuario por ID
  async getUserById(id: number) {
    return await this.prisma.users.findUnique({ where: { id } });
  }
  // Crear un nuevo usuario
  async createUser(data: CreateUserDto) {

    try {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = await this.prisma.users.create({
      data: {
        usertype_id : 2,
        username: data.username,
        email: data.email,
        password_hash: hashedPassword,
        full_name: data.full_name,
        is_active: data.is_active ?? true,
      },
    });
    const { password_hash, ...userWithoutPassword } = user;
    return userWithoutPassword;
    } catch (error) {
      if (error.code === 'P2002') {
        throw new Error('Nombre de usuario o correo electrónico ya existe.');
      }
      throw new HttpException('Error al crear el usuario.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
  // Actualizar un usuario por ID
  async updateUserById(id: number, user: UpdateUserDto) {
      const data: any = { ...user };
      if (user.password) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        data.password_hash = hashedPassword;
        delete data.password;
      }
      try {
        const updated = await this.prisma.users.update({
          where: { id },
          data: data,
        });
        const { password_hash, ...userWithoutPassword } = updated;
        return userWithoutPassword;
      } catch (error) {
        if (error?.code === 'P2025') {
          throw new HttpException('Usuario no encontrado.', HttpStatus.NOT_FOUND);
        }
        throw new HttpException('Error al actualizar el usuario.', HttpStatus.INTERNAL_SERVER_ERROR);
      }
  }
 // Eliminar un usuario por ID
  async deleteUserById(id: number) {
    try {
      await this.prisma.users.delete({ where: { id } });
      return { message: 'Usuario eliminado correctamente.' };
    } catch (error) {
      if (error?.code === 'P2025') {
        throw new HttpException('Usuario no encontrado.', HttpStatus.NOT_FOUND);
      }
      throw new HttpException('Error al eliminar el usuario.', HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }    
}
