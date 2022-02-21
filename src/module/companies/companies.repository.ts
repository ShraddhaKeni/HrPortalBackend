import { EntityRepository, Repository } from "typeorm";
import { Companies } from "./entities/company.entity";

@EntityRepository(Companies)
export class CompaniesRepository extends Repository<Companies> {

}