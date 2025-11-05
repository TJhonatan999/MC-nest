import { Controller, Get, Post, Body, Param, Delete, Put  } from '@nestjs/common';
import { TypesService } from './types.service';
import { createTypeDto } from './dto/create-type-dto';

@Controller('types')
export class TypesController {
  constructor(private readonly typesService: TypesService) {}

  @Get()
  getallTypes() {
    return this.typesService.getallTypes();
  }
  @Post()
  createType(@Body() dto: createTypeDto) {
    return this.typesService.createType(dto);
  }
  @Put(':id')
  updateTypeById(@Param('id') id:string, @Body() dto: createTypeDto) {
    return this.typesService.updateTypeById(parseInt(id), dto);
  }

  @Delete(':id')
  async deleteType(@Param('id') id:string) {
    return await this.typesService.deleteType(parseInt(id));
  }
}
