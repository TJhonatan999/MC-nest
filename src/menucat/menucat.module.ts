import { Module } from '@nestjs/common';
import { MenucatService } from './menucat.service';
import { MenucatController } from './menucat.controller';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [MenucatController],
  providers: [MenucatService, PrismaService],
})
export class MenucatModule {}
