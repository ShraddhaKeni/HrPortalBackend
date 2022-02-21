import { IsDecimal, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";
import { isFloat64Array } from "util/types";


export class CreateSalaryDto {
    @IsString()
    emp_id: string;

    @IsNotEmpty()
    @Min(1000)
    salary: number;
}
