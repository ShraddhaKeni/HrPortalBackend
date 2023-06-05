import { Type } from "class-transformer";
import { IsString, IsInt, IsEmail, MinLength, MaxLength, IsBoolean, IsDate, IsOptional } from "class-validator";

export class UpdateEmployeeDto {
    @IsString()
    @IsOptional()
    @Type(()=>String)
    name: string;

    @IsInt()
    @IsOptional()
    @Type(()=>Number)
    desig_id?: number;

    @IsInt()
    @IsOptional()
    @Type(()=>Number)
    dept_id?: number;

    @IsEmail()
    @IsOptional()
    email?: string;

    @IsBoolean()
    @IsOptional()
    @Type(()=>Boolean)
    status: boolean;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    doj?: string;
    
    @IsString()
    @IsOptional()
    signature?: string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    @IsOptional()
    emp_code?: string;
}
