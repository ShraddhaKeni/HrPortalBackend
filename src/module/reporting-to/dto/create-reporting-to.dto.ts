import { IsString } from "class-validator";

export class CreateReportingToDto {
    @IsString()
    emp_id: string;
    
    @IsString()
    reporting_emp_id: string;
}
