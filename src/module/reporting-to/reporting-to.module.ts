import { Module } from '@nestjs/common';
import { ReportingToService } from './reporting-to.service';
import { ReportingToController } from './reporting-to.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportingToRepository } from './reporting-to.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ReportingToRepository])],
  controllers: [ReportingToController],
  providers: [ReportingToService]
})
export class ReportingToModule {}
