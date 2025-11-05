import { Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user-create-dto';
import { UpdateUserDto } from './dto/user-update-dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getAllUsers() {
    return this.userService.getAllUsers();
  }
  @Get(':id')
  getUserById(@Param('id') id: string) {
    return this.userService.getUserById(parseInt(id));
  }
  @Post()
  createUser(@Body() users: CreateUserDto) {
    return this.userService.createUser(users);
  }
  @Put(':id')
  updateUserById(@Param('id') id: string, @Body() user: UpdateUserDto) {
    return this.userService.updateUserById(parseInt(id), user);
  }
  @Delete(':id')
  deleteUserById(@Param('id') id: string) {
    return this.userService.deleteUserById(parseInt(id));
  }
}
