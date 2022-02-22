import { Type } from "class-transformer";
import { IsBoolean, IsDate, IsEmail, IsInt, IsString, MaxLength, MinLength } from "class-validator";

export class CreateEmployeeDto {
    @IsString()
    name: string;
    
    @IsString()
    comp_id: string;
    
    @IsString()
    user_id: string;

    @IsInt()
    desig_id: number;
    
    @IsInt()
    dept_id: number;

    @IsEmail()
    email: string;

    @IsBoolean()
    status: boolean;

    @Type(() => Date)
    @IsDate()
    doj: string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    emp_code: string;
}
