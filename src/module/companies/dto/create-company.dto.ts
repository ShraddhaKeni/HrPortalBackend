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

    website?: string

    email?: string;

    contact_person?: string;

    contact_number?: string;

    pancard_number?: string;

    gst_number?: string;

    cin_number?: string;

    status?: boolean;
}
