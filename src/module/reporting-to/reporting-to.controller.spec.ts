import { Test, TestingModule } from '@nestjs/testing';
import { ReportingToController } from './reporting-to.controller';
import { ReportingToService } from './reporting-to.service';

describe('ReportingToController', () => {
  let controller: ReportingToController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReportingToController],
      providers: [ReportingToService],
    }).compile();

    controller = module.get<ReportingToController>(ReportingToController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
