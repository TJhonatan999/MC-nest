import { Test, TestingModule } from '@nestjs/testing';
import { TodayController } from './today.controller';
import { TodayService } from './today.service';

describe('TodayController', () => {
  let controller: TodayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TodayController],
      providers: [TodayService],
    }).compile();

    controller = module.get<TodayController>(TodayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
