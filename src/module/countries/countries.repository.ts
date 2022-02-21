import { EntityRepository, Repository } from "typeorm";
import { Country } from "./entities/country.entity";

@EntityRepository(Country)
export class CountriesRepository extends Repository<Country> {

}