import { Test, TestingModule } from '@nestjs/testing';
import { TodayService } from './today.service';

describe('TodayService', () => {
  let service: TodayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodayService],
    }).compile();

    service = module.get<TodayService>(TodayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
