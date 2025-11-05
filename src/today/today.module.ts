import { Module } from '@nestjs/common';
import { TodayService } from './today.service';
import { TodayController } from './today.controller';

@Module({
  controllers: [TodayController],
  providers: [TodayService],
})
export class TodayModule {}
