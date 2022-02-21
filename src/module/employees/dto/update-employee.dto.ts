import { Type } from "class-transformer";
import { IsString, IsInt, IsEmail, MinLength, MaxLength, IsBoolean, IsDate } from "class-validator";

export class UpdateEmployeeDto {
    @IsString()
    name: string;

    @IsInt()
    desig_id?: number;

    @IsInt()
    dept_id?: number;

    @IsEmail()
    email?: string;

    @IsBoolean()
    status: boolean;

    @Type(() => Date)
    @IsDate()
    doj?: string;
    
    @IsString()
    signature?: string;

    @IsString()
    @MinLength(10)
    @MaxLength(10)
    emp_code?: string;
}
