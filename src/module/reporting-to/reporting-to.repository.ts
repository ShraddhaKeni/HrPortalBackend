import { HttpException, HttpStatus } from "@nestjs/common";
import { isNotEmptyObject } from "class-validator";
import { EntityRepository, Repository } from "typeorm";
import { CreateReportingToDto } from "./dto/create-reporting-to.dto";
import { UpdateReportingToDto } from "./dto/update-reporting-to.dto";
import { ReportingTo } from "./entities/reporting-to.entity";

@EntityRepository(ReportingTo)
export class ReportingToRepository extends Repository<ReportingTo> {
    async createReportingTo(reportingToData: CreateReportingToDto): Promise<ReportingTo> {
        return new Promise(resolve => {
            const rtData = this.create(reportingToData);
            this.save(rtData);
            resolve(rtData);
        });
    }

    async updateReportingTo(reportingToId: number, reportingToData: UpdateReportingToDto): Promise<ReportingTo> {
        return new Promise(resolve => {
            this.update(reportingToId,reportingToData);
            const rtData = this.findOne(reportingToId);
            resolve(rtData);
        });
    }

    async getAllReportingTo(): Promise<ReportingTo[]> {
        return new Promise(resolve => {
            const rtList = this.find();
            resolve(rtList);
        });
    }

    async getOneReportingToData(reportingToId: number): Promise<ReportingTo> {
        return new Promise((resolve, reject) => {
            const emp = this.findOne(reportingToId);
            emp.then(resp => {
              if (resp) {
                resolve(emp);
              } else {
                reject(new HttpException('Data not found', HttpStatus.NOT_FOUND));
              }
            });
        });
    }
}