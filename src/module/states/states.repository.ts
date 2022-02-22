import { HttpException, HttpStatus } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateStateDto } from "./dto/create-state.dto";
import { UpdateStateDto } from "./dto/update-state.dto";
import { State } from "./entities/state.entity";

@EntityRepository(State)
export class StatesRepository extends Repository<State> {
    async addState(stateData: CreateStateDto): Promise<State> {
        return new Promise(resolve => {
            const checkState = this.findOne({
                where: {
                    name: stateData.name.trim()
                }
            });
            checkState.then(resp => {
                if (resp) {
                    this.activateState(resp.id);
                    resolve(checkState);
                  } else {
                    const stResp = this.create(stateData);
                    this.save(stResp);
                    resolve(stResp);
                  }
            });
        });
    }

    activateState(state_id: number) {
        this.update(state_id,{
            status: true
        });
    }

    async updateState(state_id: number, stateData: UpdateStateDto): Promise<State> {
        return new Promise(resolve => {
            this.update(state_id,stateData);
            const stResp = this.findOne(state_id);
            resolve(stResp);
        });
    }

    async getAllStates(): Promise<State[]> {
        return new Promise(resolve => {
            const countries = this.find({
                where: {
                    status: true
                }
            });
            resolve(countries);
        });
    }

    async getStateData(state_id: number): Promise<State> {
        return new Promise((resolve, reject) => {
            const stResp = this.findOne(state_id);
            stResp.then(resp => {
              if (resp) {
                resolve(stResp);
              } else {
                reject(new HttpException('State not found', HttpStatus.NOT_FOUND));
              }
            });
        });
    }
}