import { Repository } from "typeorm";
import { EntityRepository } from "typeorm/decorator/EntityRepository";
import { City } from "./entities/city.entity";

@EntityRepository(City)
export class CitiesRepository extends Repository<City> {

}