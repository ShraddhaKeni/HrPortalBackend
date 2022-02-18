import { IsBoolean, IsString } from "class-validator";

export class UpdateReportingToDto {
    @IsString()
    emp_id: string;
    
    @IsString()
    reporting_emp_id: string;

    @IsBoolean()
    status: boolean
}
