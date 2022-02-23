import { IsBoolean, IsEmail, IsNumber, IsNumberString, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateJobApplicantDto {

    @IsOptional()
    @IsNumber()
    job_id?: number

    @IsOptional()
    @IsString()
    name?: string

    @IsOptional()
    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @IsNumberString()
    contact_no?: string

    @IsOptional()
    @IsString()
    @IsEmail()
    email_id?: string

    @IsOptional()
    @IsString()
    cv?: string

    @IsOptional()
    @IsBoolean()
    status?: boolean
}
