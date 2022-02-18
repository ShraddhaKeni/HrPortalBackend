import { Test, TestingModule } from '@nestjs/testing';
import { ReportingToService } from './reporting-to.service';

describe('ReportingToService', () => {
  let service: ReportingToService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReportingToService],
    }).compile();

    service = module.get<ReportingToService>(ReportingToService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
