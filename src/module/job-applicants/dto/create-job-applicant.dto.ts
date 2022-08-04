import { IsBoolean, IsEmail, IsNumber, IsNumberString, IsString, MaxLength, MinLength } from "class-validator"

export class CreateJobApplicantDto {
    
    @IsNumber()
    job_id: number

    @IsString()
    name: string

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @IsNumberString()
    contact_no: string

    @IsString()
    @IsEmail()
    email_id: string

    @IsString()
    cv: string

    @IsBoolean()
    status:boolean
}
