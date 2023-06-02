import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsEmail, IsInt, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateEmployeeFormDataDto{
    @IsString()
    name: string;
    
    @IsString()
    comp_id: string;
    
    @IsString()
    user_id: string;

    @IsInt()
    @Type(()=>Number)
    desig_id: number;
    
    @IsInt()
    @Type(()=>Number)
    dept_id: number;

    @IsEmail()
    email: string;

    @IsBoolean()
    @Type(()=>Boolean)
    status: boolean;

    @Type(() => Date)
    @IsDate()
    doj: string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    emp_code: string;

    @IsString()
    @IsOptional()
    signature?:string;
}