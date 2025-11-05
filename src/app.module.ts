import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypesModule } from './types/types.module';
import { UserModule } from './user/user.module';
import { MenucatModule } from './menucat/menucat.module';
import { MenuitemsModule } from './menuitems/menuitems.module';
import { TodayModule } from './today/today.module';

@Module({
  imports: [TypesModule, UserModule, MenucatModule, MenuitemsModule, TodayModule],
  controllers: [AppController],
  providers: [AppService, ],
  
})
export class AppModule {}
