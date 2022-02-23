import { PartialType } from '@nestjs/mapped-types';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
    @IsString()
    @IsOptional()
    @MinLength(3)
    @MaxLength(30)
    name?:string

    @IsString()
    @IsOptional()
    address?:string

    country_id?: number

    state_id?: number

    city_id?: number

    pincode?: number

    @IsString()
    @IsOptional()
    website?: string

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    contact_person?: string;

    @IsString()
    @IsOptional()
    contact_number?: string;

    @IsString()
    @IsOptional()
    pancard_number?: string;

    @IsString()
    @IsOptional()
    gst_number?: string;

    @IsString()
    @IsOptional()
    cin_number?: string;

    status?: boolean;
}
