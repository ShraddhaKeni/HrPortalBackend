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
    type?: AddressType;

    @IsBoolean()
    status: boolean;
}
