import { Injectable } from '@nestjs/common';
import { CreateReportingToDto } from './dto/create-reporting-to.dto';
import { UpdateReportingToDto } from './dto/update-reporting-to.dto';
import { ReportingToRepository } from './reporting-to.repository';

@Injectable()
export class ReportingToService {
  constructor(private readonly repToRepository: ReportingToRepository) { }

  create(createReportingToDto: CreateReportingToDto) {
    return this.repToRepository.createReportingTo(createReportingToDto);
  }

  findAll() {
    return this.repToRepository.getAllReportingTo();
  }

  findOne(id: number) {
    return this.repToRepository.getOneReportingToData(id);
  }

  update(id: number, updateReportingToDto: UpdateReportingToDto) {
    return this.repToRepository.updateReportingTo(id,updateReportingToDto);
  }
}
