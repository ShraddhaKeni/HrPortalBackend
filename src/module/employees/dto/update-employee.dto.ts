import { IsString, IsInt, IsEmail, MinLength, MaxLength, IsBoolean, IsDate } from "class-validator";

export class UpdateEmployeeDto {
    @IsString()
    name: string;

    @IsInt()
    desig_id?: number;

    @IsInt()
    dept_id?: number;

    @IsEmail()
    official_email?: string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    contact_no?: string;

    @IsEmail()
    personal_email?: string;

    @IsBoolean()
    status: boolean

    @IsDate()
    dob?: string

    @IsDate()
    doj?: string

    @IsString()
    profile_pic?: string
    
    @IsString()
    signature?: string

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    emergency_no1?: string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    emergency_no2?: string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    emp_code?: string;
}
