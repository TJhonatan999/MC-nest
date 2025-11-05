import { Module } from '@nestjs/common';
import { MenucatService } from './menucat.service';
import { MenucatController } from './menucat.controller';

@Module({
  controllers: [MenucatController],
  providers: [MenucatService],
})
export class MenucatModule {}
