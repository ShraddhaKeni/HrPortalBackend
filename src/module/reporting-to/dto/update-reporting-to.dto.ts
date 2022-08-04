import { IsBoolean, IsOptional, IsString } from "class-validator";

export class UpdateReportingToDto {
    @IsString()
    @IsOptional() //added as it was not allowing to change status
    emp_id: string;
    
    @IsString()
    @IsOptional() //added as it was not allowing to change status
    reporting_emp_id: string;

    @IsBoolean()
    @IsOptional()//added as it was not allowing to change status
    status: boolean
}
