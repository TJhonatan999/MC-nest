import { Test, TestingModule } from '@nestjs/testing';
import { MenucatController } from './menucat.controller';
import { MenucatService } from './menucat.service';

describe('MenucatController', () => {
  let controller: MenucatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenucatController],
      providers: [MenucatService],
    }).compile();

    controller = module.get<MenucatController>(MenucatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
