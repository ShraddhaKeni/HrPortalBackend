import { IsString, IsInt, IsNumberString, Length, IsBoolean, IsOptional } from "class-validator";
import { AddressType } from "../entities/address.entity";

export class UpdateAddressDto {
    
    @IsOptional()
    @IsString()
    address?: string;

    @IsOptional()
    @IsInt()
    country_id?: number;
    
    @IsOptional()
    @IsInt()
    state_id?: number;
    
    @IsOptional()
    @IsInt()
    city_id?: number;
    
    @IsOptional()
    @IsNumberString()
    @Length(6,6)
    pincode?: string;

    @IsOptional()
    @IsString()
    type?: AddressType;

    @IsBoolean()
    @IsOptional() //added for frontend
    status: boolean;
}
