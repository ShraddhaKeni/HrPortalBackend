import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateCompanyDto {
    @IsString()
    @MinLength(3)
    @MaxLength(30)
    name:string

    @IsString()
    address:string

    country_id: number

    state_id: number

    city_id: number

    pincode: number

    @IsString()
    website?: string

    @IsString()
    email?: string;

    @IsString()
    contact_person?: string;

    @IsString()
    contact_number?: string;

    @IsString()
    pancard_number?: string;

    @IsString()
    gst_number?: string;

    @IsString()
    cin_number?: string;

    status: boolean;
}
