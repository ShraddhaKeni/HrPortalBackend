import { HttpException, HttpStatus } from "@nestjs/common";
import { EntityRepository, Repository } from "typeorm";
import { CreateAddressDto } from "./dto/create-address.dto";
import { UpdateAddressDto } from "./dto/update-address.dto";
import { Address } from "./entities/address.entity";

@EntityRepository(Address)
export class AddressRepository extends Repository<Address> {
    async createAddress(createAddrData: CreateAddressDto): Promise<Address> {
        return new Promise((resolve, reject) => {
            const emp = this.create(createAddrData);
            const addr = this.save(emp);
            addr.then(resp => {
                if(resp) {
                    resolve(addr);
                } else {
                    reject(new HttpException('Failed to create Address', HttpStatus.NOT_ACCEPTABLE));
                }
            });
            addr.catch(err => {
                console.error(`Custom Error: ${err.message}`);
                reject(new HttpException(err.message, HttpStatus.NOT_ACCEPTABLE));
            });
        });
    }

    async getAllAddressList(): Promise<Address[]> {
        return new Promise(resolve => {
            const addr = this.find({
                where: {
                    status: true
                },
                order: {
                    id: "ASC"
                }
            });
            resolve(addr);
        });
    }

    async getAddressData(addr_id: number): Promise<Address> {
        return new Promise((resolve, reject) => {
            const addr = this.findOne(addr_id);
            addr.then(resp => {
              if (resp) {
                resolve(addr);
              } else {
                reject(new HttpException('Address not found', HttpStatus.NOT_FOUND));
              }
            });
        });
    }

    async updateAddress(addr_id: number, addressData: UpdateAddressDto): Promise<Address> {
        return new Promise((resolve, reject) => {
            const addr = this.findOne(addr_id);
            addr.then(resp => {
              if (resp) {
                this.update(addr_id,addressData);
                const addrsRes = this.findOne(addr_id);
                resolve(addrsRes);
              } else {
                reject(new HttpException('Address not found', HttpStatus.NOT_FOUND));
              }
            });
        });
    }
}