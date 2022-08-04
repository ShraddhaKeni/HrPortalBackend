import { HttpException, HttpStatus } from "@nestjs/common";
import { Repository } from "typeorm";
import { EntityRepository } from "typeorm/decorator/EntityRepository";
import { CreateCityDto } from "./dto/create-city.dto";
import { UpdateCityDto } from "./dto/update-city.dto";
import { City } from "./entities/city.entity";

@EntityRepository(City)
export class CitiesRepository extends Repository<City> {
    async addCity(cityData: CreateCityDto): Promise<City> {
        return new Promise(resolve => {
            const checkCity = this.findOne({
                where: {
                    name: cityData.name.trim()
                }
            });
            checkCity.then(resp => {
                if (resp) {
                    this.activateCity(resp.id);
                    resolve(checkCity);
                  } else {
                    const cResp = this.create(cityData);
                    this.save(cResp);
                    resolve(cResp);
                  }
            });
        });
    }

    activateCity(city_id: number) {
        this.update(city_id,{
            status: true
        });
    }

    async updateCity(city_id: number, cityData: UpdateCityDto): Promise<City> {
        return new Promise(resolve => {
            this.update(city_id,cityData);
            const cResp = this.findOne(city_id);
            resolve(cResp);
        });
    }

    async getAllCities(): Promise<City[]> {
        return new Promise(resolve => {
            const cities = this.find({
                where: {
                    
                }
            });
            resolve(cities);
        });
    }

    async getCityData(city_id: number): Promise<City> {
        return new Promise((resolve, reject) => {
            const cResp = this.findOne(city_id);
            cResp.then(resp => {
              if (resp) {
                resolve(cResp);
              } else {
                reject(new HttpException('City not found', HttpStatus.NOT_FOUND));
              }
            });
        });
    }

    async getCityUsingStateId(s_id: number): Promise<City[]> {
        return new Promise((resolve, reject) => {
            const cResp = this.find({
                where: {
                    state_id: s_id
                },
                select:['id','name'],
                order:{
                    id:'ASC'
                }
            });
            cResp.then(resp => {
              if (resp) {
                resolve(cResp);
              } else {
                reject(new HttpException('No Data', HttpStatus.NOT_FOUND));
              }
            });
        });
    }
}