import { Module } from '@nestjs/common';
import { TodayService } from './today.service';
import { TodayController } from './today.controller';
import { PrismaService } from  '../prisma.service';


@Module({
  controllers: [TodayController],
  providers: [TodayService, PrismaService],
})
export class TodayModule {}
