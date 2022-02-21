import { HttpException, HttpStatus } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateCountryDto } from "./dto/create-country.dto";
import { UpdateCountryDto } from "./dto/update-country.dto";
import { Country } from "./entities/country.entity";

@EntityRepository(Country)
export class CountriesRepository extends Repository<Country> {
    async addCountry(countryData: CreateCountryDto): Promise<Country> {
        return new Promise(resolve => {
            const checkCountry = this.findOne({
                where: {
                    name: countryData.name.trim()
                }
            });
            checkCountry.then(resp => {
                if (resp) {
                    this.activateCountry(resp.id);
                    resolve(checkCountry);
                  } else {
                    const cResp = this.create(countryData);
                    this.save(cResp);
                    resolve(cResp);
                  }
            });
        });
    }

    activateCountry(country_id: number) {
        this.update(country_id,{
            status: true
        });
    }

    async updateCountry(country_id: number, countryData: UpdateCountryDto): Promise<Country> {
        return new Promise(resolve => {
            this.update(country_id,countryData);
            const cResp = this.findOne(country_id);
            resolve(cResp);
        });
    }

    async getAllCountries(): Promise<Country[]> {
        return new Promise(resolve => {
            const countries = this.find({
                where: {
                    status: true
                }
            });
            resolve(countries);
        });
    }

    async getCountryData(country_id: number): Promise<Country> {
        return new Promise((resolve, reject) => {
            const cResp = this.findOne(country_id);
            cResp.then(resp => {
              if (resp) {
                resolve(cResp);
              } else {
                reject(new HttpException('Country not found', HttpStatus.NOT_FOUND));
              }
            });
        });
    }
}