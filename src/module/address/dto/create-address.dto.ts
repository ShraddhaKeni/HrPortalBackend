import { IsInt, IsNumberString, IsString, Length } from "class-validator";
import { AddressType } from "../entities/address.entity";

export class CreateAddressDto {
    @IsString()
    user_id: string;
    
    @IsString()
    address: string;

    @IsInt()
    country_id: number;
    
    @IsInt()
    state_id: number;
    
    @IsInt()
    city_id: number;
    
    @IsNumberString()
    @Length(6,6)
    pincode: string;

    @IsString()
    type: AddressType;
}
