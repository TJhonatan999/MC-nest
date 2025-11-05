import { Test, TestingModule } from '@nestjs/testing';
import { MenucatService } from './menucat.service';

describe('MenucatService', () => {
  let service: MenucatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenucatService],
    }).compile();

    service = module.get<MenucatService>(MenucatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
