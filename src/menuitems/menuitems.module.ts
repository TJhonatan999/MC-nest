import { Module } from '@nestjs/common';
import { MenuitemsService } from './menuitems.service';
import { MenuitemsController } from './menuitems.controller';
import { PrismaService } from  '../prisma.service';

@Module({
  controllers: [MenuitemsController],
  providers: [MenuitemsService, PrismaService],
})
export class MenuitemsModule {}
