import { IsNotEmpty, IsString, Min } from "class-validator";

export class CreateSalaryDto {
    @IsString()
    emp_id: string;

    @IsNotEmpty()
    @Min(1000)
    salary: number;
}